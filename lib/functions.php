<?php
require_once(__DIR__ . '/TwitterOAuth/TwitterOAuth.php');
require_once(__DIR__ . '/TwitterOAuth/Exception/TwitterException.php');
require_once(__DIR__ . '/../config.php');
require_once(__DIR__ . '/tweet_generator.php');

use TwitterOAuth\TwitterOAuth;

$db = new SQLite3(DATABASE_NAME);

$config = array(
    'consumer_key' => CONSUMER_KEY,
    'consumer_secret' => CONSUMER_SECRET,
    'oauth_token' => OAUTH_TOKEN,
    'oauth_token_secret' => OAUTH_TOKEN_SECRET,
    'output_format' => 'object'
);

$t = new TwitterOAuth($config);

function getCollege($id) {
	global $db;
	$result;
	$statement = $db->prepare('SELECT * FROM colleges WHERE ' .
		((is_int($id)) ? 'rowid' : 'name') . ' = :id');
	$statement->bindValue(':id', $id, (is_int($id)) ? SQLITE3_INTEGER : SQLITE3_TEXT);
	$result = $statement->execute()->fetchArray();
	return $result;
}

function getTweetStrings($collegeId, $maxId=-1, $count=100, $type='recent') {
	global $t;
	$college = getCollege($collegeId);
	$latitude = $college['latitude'];
	$longitude = $college['longitude'];
	$radius = $college['radius'];
	$params = array(
		'geocode' => "$latitude,$longitude,$radius" . 'mi',
		'count' => $count,
		'result_type' => $type,
		'lang' => 'en'
	);
	if ($maxId > -1) {
		$params['max_id'] = $maxId;
	}
	$response = $t->get('search/tweets', $params);
	$tweetStrings = array();
	$tweets = $response->statuses;
	foreach ($tweets as $tweet) {
		array_push($tweetStrings, $tweet->text);
	}
	return array('strings' => $tweetStrings, 'lastId' => $tweets[sizeof($tweets)-1]->id_str);
}

function generateTweet($collegeId) {
	$generator = new Tweet_Generator();
	$tweets = getTweetStrings($collegeId);
	for ($i = 0; $i < 4; ++$i) {
		foreach ($tweets['strings'] as $tweet) {
			$generator->add_tweet($tweet);
		}
		$tweets = getTweetStrings($collegeId, bcsub($tweets['lastId'], 1));
	}
	return $generator->generate_tweet();
}
?>
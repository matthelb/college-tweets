<?php
require_once(__DIR__ . '/../lib/functions.php');
if(isset($_GET['college'])){
	header('Content-type: application/json');

	$statement = $db->prepare('SELECT * FROM counter');
	$result = $statement->execute()->fetchArray(SQLITE3_ASSOC);
	$update = $db->prepare('UPDATE counter SET count=:val');
	$update->bindValue(':val', $result['count']+1, SQLITE3_INTEGER);
	$update->execute();
	$result = $statement->execute()->fetchArray(SQLITE3_ASSOC);
	
	echo(json_encode(array("success"=>true, "tweet" => generateTweet($_GET['college']), "count" => $result['count'])));
}
else{
	http_response_code(400);
}	
?>
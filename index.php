<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
</head>
<body>
	<?php
		require_once('tweet_generator.php');
		$generator = new Tweet_Generator();
		$generator->add_tweet('Hello. Ananth here. Hopefully, this works! But, I don\'t know if it will!');
		$generator->add_tweet('Please work!! Hello please work... I really hope so, otherwise it\'s going to be annoying.');
		$generator->generate_tweet();
	?>
</body>
</html>
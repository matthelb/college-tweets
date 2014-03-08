<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<script src="tweet_generator.js"></script>
	<script src="test.js"></script>
</head>
<body onload="test()">
	<?php
		require_once('tweet_generator.php');
		$generator = new Tweet_Generator();
		$generator->add_tweet('Hello. My name is Ananth. Or it might be?? You\'ll be scared');
		$generator->generate_tweet();
	?>
</body>
</html>
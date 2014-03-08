<?php
require_once(__DIR__ . '/../lib/functions.php');
if(isset($_GET['college'])){
	header('Content-type: application/json');
	echo(json_encode(array("success"=>true, "tweet" => generateTweet($_GET['college']))));
}
else{
	http_response_code(400);
}	
?>
<?php
require_once(__DIR__ . '/../config.php');
header('Content-type: application/json');
$db = new SQLite3(DATABASE_NAME);
if (isset($_GET['collegeId'])) {
	$statement = $db->prepare('SELECT * FROM colleges WHERE rowid = :id');
	$statement->bindValue(':id', $_GET['collegeId'], SQLITE3_INTEGER);
	$result = $statement->execute()->fetchArray(SQLITE3_ASSOC);
	if ($result) {
		echo(json_encode(array("success"=>true, "college" => $result)));
	} else {
		http_response_code(404);
	}
} else {
	$statement = $db->prepare('SELECT *, rowid FROM colleges');
	$result = $statement->execute();
	$colleges = array();
	while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
		array_push($colleges, $row);
	}
	echo(json_encode(array("success"=>true, "colleges" => $colleges)));
}




?>	
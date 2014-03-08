<?php
require_once(__DIR__ . '/../config.php');
$db = new SQLite3(DATABASE_NAME);
$statement = $db->prepare('SELECT name, rowid FROM colleges');
$result = $statement->execute();
header('Content-type: application/json');
$colleges = array();
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	array_push($colleges, $row);
}
echo(json_encode(array("success"=>true, "colleges" => $colleges)));
?>	
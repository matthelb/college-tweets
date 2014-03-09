<?php
require_once(__DIR__ . '/../config.php');
header('Content-type: application/json');
$db = new SQLite3(DATABASE_NAME);

?>
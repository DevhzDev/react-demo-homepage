<?php
header("Access-Control-Allow-Origin: *");

$resopnse = array("success"=> true, "message"=>"Loaded");
echo json_encode($resopnse);
?>

<?php

$discs_list = file_get_contents(__DIR__ . '/../data/disc.json');

header('Content-Type: application/json; charset=utf-8');

echo $discs_list;
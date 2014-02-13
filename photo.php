<?php

class Photo {

    static function helloWorld($message="World") {
        echo "Hello {$message}";
    }
}
$myPhoto = new Photo();
$myPhoto->helloWorld();
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Danke für deine Nachricht!";
} else {
    echo "Ungültiger Zugriff.";
}
?>

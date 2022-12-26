<?php
try{
    $conn = new PDO("mysql:host=localhost;dbname=kiberone", 'root', '');

    if(empty($_POST['name']) or empty($_POST['phone'])) exit("Поле не заполнено");

    $query = "INSERT INTO applications VALUES (NULL, :name, :phone, NOW())";
    $msg = $conn->prepare($query);
    $msg->execute(['name' => $_POST['name'], 'phone' => $_POST['phone']]);

    header("Location: contacts.html");
} catch (PDOException $e){
    echo "error" . $e->getMessage();
};

?>
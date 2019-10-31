<?php
    $theme="Новая заявка с сайта";
    error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
    // создание переменных из полей формы		
    if (isset($_POST['name'])) {$name = $_POST['name'];		if ($name == '')	{unset($name);}}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];		if ($phone == '')	{unset($phone);}}
    //стирание треугольных скобок из полей формы
    // адрес почты куда придет письмо
    $address="2485410@gmail.com";
    // текст письма 
    $note_text="Тема : $theme \r\nИмя : $name \r\nНомер телефона : $phone";
    
    if (isset($name)) {
    mail($address,$theme,$note_text,"Content-type:text/plain; windows-1251"); 
    }
?>
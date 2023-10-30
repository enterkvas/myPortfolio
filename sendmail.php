<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

//who is the letter from?
$mail->setFrom('from@example.com', 'Mailer');
//to whom to send
$mail->addAddress('joe@example.net', 'Joe User');
//Content
$mail->Subject = 'Here is the subject';
//body of the letter
$body = '<h1>This is the HTML message body <b>in bold!</b></h1>';

if (trim(!empty($_POST['name']))){
  $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))){
  $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if (trim(!empty($_POST['message']))){
  $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

//send
if ($mail->send()){
  $message = 'Error';
} else {
  $message = 'Data sent';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
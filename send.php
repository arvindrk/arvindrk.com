<?php

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  $fname = $request->fname;
  $lname = $request->lname;
  $subject = "Website Suggestions";
  $to = "arvindsuna10@gmail.com";
  $email = $request->email;
  $phone = $request->phone;
  $feed = $request->comments;
  $message = "Form details below\n\nName : ".$fname." ".$lname."\nEmail : ".$email."\nPhone : ".$phone."\nMessage : ".$feed."\n";
  $header = "From ".$email." Feedback ";
  $mail = mail($to,$subject,$message,$header);
  if($mail)
    echo "Sent";
?>
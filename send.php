<?php

	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$subject="Website Suggestions";
  	$to="arvindsuna10@gmail.com";
  	$email=$_POST['email'];
  	$phone=$_POST['phone'];
  	$feed=$_POST['comments'];
  	$message="Form details below\n\nName : ".$fname." ".$lname."\nEmail : ".$email."\nPhone : ".$phone."\nMessage : ".$feed."\n";
  	$header="From ".$email." Feedback ";

  	mail($to,$subject,$message,$header);
 	echo "Mail Sent Successfully!";
?>
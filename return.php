<?php 
	$to=$_POST['email'];
	$fname=$_POST['fname'];
	$subject="Thank you for your valuable input"
	$message="Hello ".$fname.",\nThank you very much for writing me your suggestions. It is very important for me and I will write you back as soon as possible if necessary. Feel free to continue dropping me emails if you any more suggestions.Have a good day :) \n\nThank you\n\nRegards\nArvind";
	$header="From : Arvind Rk";
	$ret=mail($to,$subject,$message,$header);
?>
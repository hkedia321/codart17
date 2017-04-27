<?php

if($_POST['submit']){//if the form is submitted

	$name=$_POST['name'];
	$regno=$_POST['regno'];
	$phone=$_POST['phone'];
	$email=$_POST['email'];
	$hackerrank=$_POST['hackerrank'];


	//change your database credentials here!!!!!!!!!!!!!!
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="secret";
	$dbname="vitbookshare";

		//connect databse
	$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
	if(mysqli_connect_errno()){
		die("Failed to connect with MySQL: ".mysqli_connect_error());
	}

	$query="INSERT INTO register SET name='{$name}', regno='{$regno}', phone='{$phone}', email='{$email}', hackerrank='{$hackerrank}' ;";
	
	$result=mysqli_query($con,$query);
	if($result){
		echo "<h4>Successfully registered! <a href='register.html'>Go back</a></h4>";
	}
	else{
		echo "<h4>Some error occurred! Please try again.</h4>";
	}
}

else{
	echo "No form submitted";
}

?>
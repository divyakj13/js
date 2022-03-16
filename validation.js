
var regName = /^[a-zA-Z ]+$/;
var phoneNum =/^[6789]{1}[\d]{9}$/;
function doclick(){
	
	var uname=document.getElementById("name").value;
	
	if(uname=="")
	{
	alert("enter name");
	return false;
	}
	else if(regName.test(uname)==false)
	{
	//console.log("hola");
	alert("only alphabets are allowed");
	return false;
	}	
 	var dobirth=document.getElementById("dob").value;
	var mob=document.getElementById("phonum").value;
	if(mob=="")
	{
	alert("Mobile Number can't be empty");
	return false;
	}
	else if(phoneNum.length()>10)
	{
        alert("Phone number should contain only 10 digits");
	return false;
	else if(phoneNum.test(phonum)==false)
	{
        alert("Phone number should contain only 10 digits");
	return false;
	}	
	
}


var regName = /^[a-zA-Z ]+$/;
var phoneNum =/^[6789]{1}[\d]{9}$/;
function doclick(){
	
	var uname=document.getElementById("name").value;
	if(regName.test(uname)==false)
	{
	alert("only alphabets are allowed");
	}
		
	var dobirth=document.getElementById("dob").value;
	
	var mob=document.getElementById("phonum").value;
	if(phoneNum.test(phonum)==false)
	{
        alert("Phone number should contain only 10 digits");
	}
	
	



	
	
}

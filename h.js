function doclick(){
	var nameregex=/^[a-zA-Z]{3,15}$/;
	var phnregex=/[6-9]\d{9}/;	
	var uname = document.getElementById("name").value;
	var uphne = document.getElementById("phonum").value;
	var tech = document.getElementById("technames").value;
	

	if(nameregex.test(uname) ==false)
	{
	  document.getElementById("username").innerHTML=" ** Please fill the name only with alphabets between 2 to 15 characters";
	
	}
	else{
	  document.getElementById("username").innerHTML="";
	}
	if(!phnregex.test(uphne))
	{
		document.getElementById("usernum").innerHTML=" **Phone Number should contain 10 digits and should start with 6,7,8,9";

	}
	else{
		document.getElementById("usernum").innerHTML="";
	}

	if(technames == "Choose from below"){
		document.getElementById("tech").innerHtml=" **please choose!!";
		return false;
	}
	else{
		document.getElementById("tech").innerHTML="";
	}

	document.getElementsByClassName('form-center')[0].addEventListener('submit' , event => {
        event.preventDefault()
        doclick()})
	
	}
	

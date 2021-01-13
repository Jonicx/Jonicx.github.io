function myfunction(){
   var form = document.getElementById("form");
   var email = document.getElementById("email").value;
   var errortextemail = document.getElementById("error2");
   var pattner =/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   var name = document.getElementById("name").value;
   var errortextname = document.getElementById("error");
   var messsage = document.getElementById("message").value;
   var errortextmessage = document.getElementById("error3")

   if(email.match(pattner)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      errortextemail.innerHTML = "Email Address is valid!";
      errortextemail.style.color = "#00ff00";
   }else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      errortextemail.innerHTML = "Please a valid email address is required.";
      errortextemail.style.color = "#ff0000";
   }

   if(email == '' || email == null){
      form.classList.remove("valid");
      form.classList.add("invalid");
      errortextemail.innerHTML = "Please your email address is required.";
      errortextemail.style.color = "#ff0000";
   }

   if( name  == '' || name == null){
      form.classList.remove("valid");
      form.classList.add("invalid");
      errortextname.innerHTML = "Please your name is required to complete.";
      errortextname.style.color = "#ff0000";
   }else{
      form.classList.add("valid");
      form.classList.remove("invalid");
      errortextname.innerHTML = "Thank you for completing this field!";
      errortextname.style.color = "#00ff00";
   }


   if(messsage >= 150){
      form.classList.remove("valid");
      form.classList.add("invalid");
      errortextmessage.innerHTML = "Please a message must be less than 150 letter.";
      errortextmessage.style.color = "#ff0000";
   }
}
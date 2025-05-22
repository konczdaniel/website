function sendMail(){
  let parms={
  name:document.getElementById("name").value,
  email:document.getElementById("email").value,
  message:document.getElementById("message").value,
  }
  if(!parms.name || !parms.email || !parms.message){
    errorMessage();
  }
  else{
    emailjs.send("service_4jsutdj","template_bqkv4h5",parms).then(
    sentAnimation()
  );
  }

}
function sentAnimation(){
  const div= document.getElementById("send-button");
  const name=document.getElementById("name");
  const email=document.getElementById("email");
  const message=document.getElementById("message");
  const errorMessage=document.getElementById("error-message");

div.style.backgroundColor="transparent";
div.style.transition="background 0.5s ease-in-out";
errorMessage.textContent="";

 div.textContent="";
  name.value="";
  email.value="";
  message.value="";

  setTimeout(() => {
    div.style.backgroundColor="black";
    div.style.transition="background 0.5s ease-in-out";
    div.textContent="Sent!";
  }, 1200);

 setTimeout(() => {
  div.textContent="Send";
 }, 5000);
}

function errorMessage(){
  const errorMessage=document.getElementById("error-message");
  errorMessage.textContent="Please fill all the fields";

}
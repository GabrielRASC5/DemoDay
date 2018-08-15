let login =document.createElement("div");
let logintxt = document.createElement("h1");
let info = document.createElement("div");
let txtEmail= document.createElement('input');
let txtPass=document.createElement('input');
let button = document.createElement("button");

loginForm()
function loginForm(){
  document.getElementById("log").style.backgroundColor ="white";
  document.getElementById("sign").style.backgroundColor="grey";
  let user = document.body.getElementsByClassName("user")[0];
  //Contains the login section
  login.setAttribute("class", "login")
  user.appendChild(login)
  login =document.body.getElementsByClassName("login")[0];
  //Login text element
  logintxt.setAttribute("id","logintxt")
  logintxt.innerHTML = "Login into your existing JMM account, if you haven't made one yet, then please sign up!";
  login.appendChild(logintxt);
  //Info element containing email,password, and button
  info.setAttribute("class","info");
  login.appendChild(info);
  info =document.body.getElementsByClassName("info")[0];
  //Email element
  txtEmail.setAttribute("id","textEmail")
  txtEmail.setAttribute("placeholder","Email")
  txtEmail.setAttribute("type","email")
  info.appendChild(txtEmail);
  //Password element
  txtPass.setAttribute("id","textPass");
  txtPass.setAttribute("placeholder","Password");
  txtPass.setAttribute("type","password");
  info.appendChild(txtPass);
  //Button element
  button.setAttribute("id","login")
  button.innerHTML ="Login"
  info.appendChild(button)
  document.getElementsByClassName("login")[0].style.display="flex";
}

function clickForm(){
  document.getElementsByClassName("signUp")[0].style.display="none";
  loginForm();
}


let signUp =document.createElement("div");
let signInfoText= document.createElement("h1")
let fullName = document.createElement("input");
let signEmail = document.createElement("input");
let signPass= document.createElement('input');
let confirmPass=document.createElement('input');
let signButton = document.createElement("button");
let checkPass = document.createElement("h4");
function signUpForm() {
  document.getElementsByClassName("login")[0].style.display="none";
  document.getElementById("sign").style.backgroundColor = "white";
  document.getElementById("log").style.backgroundColor = "grey";
  let user = document.body.getElementsByClassName("user")[0];
  //Contains the sign up section
  signUp.setAttribute("class", "signUp")
  user.appendChild(signUp)
  signUp = document.body.getElementsByClassName("signUp")[0];
  //Sign up text Info
  signInfoText.setAttribute("id","signInfoText")
  signInfoText.innerHTML = "Sign up for a JMM account in order to join stuff..blah.blah";
  signUp.appendChild(signInfoText);
  //Full name text element
  fullName.setAttribute("id", "fullName")
  fullName.setAttribute("placeholder", "Full Name")
  signUp.appendChild(fullName);
  //Email element
  signEmail.setAttribute("id", "signEmail")
  signEmail.setAttribute("placeholder", "Email")
  signEmail.setAttribute("type", "email")
  signUp.appendChild(signEmail);
  //Password
  signPass.setAttribute("id", "signPass");
  signPass.setAttribute("placeholder", "Password");
  signPass.setAttribute("type", "password");
  signUp.appendChild(signPass);
  //Confirm password
  confirmPass.setAttribute("id", "confPass");
  confirmPass.setAttribute("placeholder", "Confirm Password");
  confirmPass.setAttribute("type", "password");
  signUp.appendChild(confirmPass);
  //Password check
  checkPass.setAttribute("id", "checkPass")
  signUp.appendChild(checkPass);
  //Button element
  signButton.setAttribute("id", "signUpBtn")
  signButton.innerHTML = "Sign Up"
  signUp.appendChild(signButton)
  document.getElementsByClassName("signUp")[0].style.display="flex";
}

confirmPass.addEventListener("keyup", function(){
  if(signPass.value ==confirmPass.value){
    confirmPass.value = signPass.value;
    document.getElementById("signPass").style.backgroundColor = "white";
    document.getElementById("confPass").style.backgroundColor = "white";
    checkPass.innerHTML ="";
  } else {
    checkPass.innerHTML = "Passwords do not match!!"
    document.getElementById("signPass").style.backgroundColor = "rgba(210, 45, 45, 0.74)";
    document.getElementById("confPass").style.backgroundColor = "rgba(210, 45, 45, 0.74)";
  }
})


signButton.addEventListener("click",updateDB);

//Set database object here
let database= firebase.database().ref()
/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    let name = fullName.value;
    let email = signEmail.value;
    let password = confirmPass.value;
    fullName.value = "";
    signEmail.value  = "";
    signPass.value="";
    confirmPass.value ="";
    //Update database here
let value = {
  NAME: name,
  EMAIL:  email,
  PASSWORD: password
}
  database.push(value);
}

database.on("value",logins);
function logins(rowData){
  let row= rowData.val()
  let email=row.EMAIL;
  console.log(email)
}
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const checkbox = document.getElementById('agree');
let spouse = document.getElementById('spouse');
const notmarried = document.getElementById('notmarried');
let storearray=[];


function display(){
    localStorage.setItem("added-items",firstname.value+" "+lastname.value+" "+email.value);
   
  for (var i = 0; i < localStorage.length; i++){
     let x=localStorage.getItem(localStorage.key(i));
     storearray.push(x);
}
console.log(storearray);
    document.getElementById("display_local_storage_data").innerHTML=storearray;

}




function enable() {
  document.getElementById("spouse").disabled = false;
}
function disable() {
  document.getElementById("spouse").value = "";
  document.getElementById("spouse").disabled = true;
}

function onsubmitt() {

  if(checkbox.checked) 
  { return true; } 
  else { 
    
    checkbox.style.outline="2px solid red";
    return false;
  }
 
}
function isEmail(emailval){
  var atSymbol = emailval.indexOf("@");
  if(atSymbol < 1)
  return false;
  var dot =emailval.lastIndexOf('.');
  if(dot <=atSymbol+2)
  return false;
  if(dot === emailval.length - 1)
  return false;

  return true;

}
function isInputempty(input,inputText){
  if(inputText== ""){
    input.style.border="1px solid red";
  return false; 
  }else
  {
    input.style.border="1px solid #2ecc71";
  }
  return true;
}
function onempty(){
  let fnameText=document.forms["myForm"]["firstname"].value.trim();
  let bool=isInputempty(firstname,fnameText);
  
  let lnameText=document.forms["myForm"]["lastname"].value.trim();
  bool &=isInputempty(lastname,lnameText);
  
  let inputText=document.forms["myForm"]["email"].value.trim();
   if(!isEmail(inputText)){
    email.style.border="1px solid red";
  return false; 
  }else
  {
    email.style.border="1px solid #2ecc71";
  }
  return bool;
}
function validateform(){
  return (onsubmitt() && onempty());
}




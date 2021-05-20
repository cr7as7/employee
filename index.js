const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
let spouse = document.getElementById('spouse');
const notmarried = document.getElementById('notmarried');
let storearray=[];


function display(){
    localStorage.setItem("added-items",firstname.value+" "+lastname.value+" "+email.value());
   
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
  // const firstnamval = firstname.value.trim();
  // const lastnamval = lastname.value.trim();
  // const emailval = email.value.trim();
  // const spouseval= spouse.value.trim();
  
  
  if(document.getElementById('agree').checked) 
  { return true; } 
  else { 
    alert('Please indicate that you have read and agree to the Terms and Conditions'); return false; 
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
function onempty(){
   var x=document.forms["myForm"]["firstname"].value.trim();
   if(x== ""){
  //  alert("name must be filled out");
    firstname.style.border="1px solid red";
  return false; 
  }else
  {
    firstname.style.border="1px solid #2ecc71";
  }
   x=document.forms["myForm"]["lastname"].value.trim();
   if(x== ""){
    lastname.style.border="1px solid red";
  return false; 
  }else
  {
    lastname.style.border="1px solid #2ecc71";
  }
  x=document.forms["myForm"]["email"].value.trim();
   if(!isEmail(x)){
    email.style.border="1px solid red";
  return false; 
  }else
  {
    email.style.border="1px solid #2ecc71";
  }
  return true;
}
function validateform(){
  return (onsubmitt() && onempty());
}




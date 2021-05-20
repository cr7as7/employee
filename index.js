const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const spouse = document.getElementById('spouse');
const notmarried = document.getElementById('notmarried');
var save_value=document.getElementById("save_value");
var read_localstorage=document.getElementById("read_localstorage");
var localstorage_value=document.getElementById("localstorage_value");
var read_all_data=document.getElementById("read_all_data");

  save_value.onclick=function(){
    localStorage.setItem(firstname.value,firstname.value);
  }

  read_localstorage.onclick=function(){
    localstorage_value.textContent=localStorage.getItem(firstname.value);
}

read_all_data.onclick=function(){
  var keys=Object.keys(localStorage);
  console.log(keys);
  for(var key of keys){
    console.log("Key : "+key+" : Value : "+localStorage.getItem(key));
}
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
function onempty(){
   var x=document.forms["myForm"]["firstname"].value.trim();
   if(x== ""){
  //  alert("name must be filled out");
    firstname.style.border="1px solid red";
  return false; 
  }
   x=document.forms["myForm"]["lastname"].value.trim();
   if(x== ""){
   alert("last name must be filled out");
  return false; 
  }
  x=document.forms["myForm"]["email"].value.trim();
   if(x== ""){
   alert("email must be filled out");
  return false; 
  }
  return true;
}
function validateform(){
  return (onsubmitt() && onempty());
}




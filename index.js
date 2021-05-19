const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const spouse = document.getElementById('spouse');
const notmarried = document.getElementById('notmarried');

function enable() {
  document.getElementById("spouse").disabled = false;
}
function disable() {
  document.getElementById("spouse").value = "";
  document.getElementById("spouse").disabled = true;
}
function onsubmitt() {
  if(document.getElementById('agree').checked) 
  { return true; } 
  else { 
    alert('Please indicate that you have read and agree to the Terms and Conditions'); return false; 
  }
}
function setErrormsg(){
  
  alert('Please indicate that you have read and agree to the Terms and Conditions'); 
  return false; 

}
function validate(){
  const firstnamval = firstname.value.trim();
const lastnamval = lastname.value.trim();
const emailval = email.value.trim();
const spouseval= spouse.value.trim();

if(firstnameval ==="")
{
  
  alert('Please indicate that you have read and agree to the Terms and Conditions'); 
  return false; 
}
return true;
}



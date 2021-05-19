const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const spouse = document.getElementById('spouse');
const notmarried = document.getElementById('notmarried');

if(notmarried.checked)
{
  spouse.setAttribute("disabled","disabled");
}

form.addEventListener('submit',(event) => {
  event.preventDefault();
  validate();
})
const isEmail = (emailval) => {
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
const validate = () => {
  
const firstnamval = firstname.value.trim();
const lastnamval = lastname.value.trim();
const emailval = email.value.trim();
const spouseval= spouse.value.trim();

if(firstnameval ==="")
{
  setErrormsg(firstname,'First Name cannot be empty');
}
else{
  setSuccessmsg(firstname);
}


if(lastnameval ==="")
{
  setErrormsg(lastname,'Last Name cannot be empty');
}
else{
  setSuccessmsg(lastname);
}


if(emailval ==="")
{
  setErrormsg(email,'email Name cannot be empty');
}else if(!isEmail(emailval))
{
  setErrormsg(email,'Not a valid Email');
}
else{
  setSuccessmsg(email);
}


if(spouseval ==="")
{
  setErrormsg(spouse,'Spouse Name cannot be empty');
}
else{
  setSuccessmsg(spouse);
}
}

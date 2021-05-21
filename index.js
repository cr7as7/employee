const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const checkbox = document.getElementById('agree');
const male = document.getElementById('male');
const female = document.getElementById('female');
const other = document.getElementById('other');
const notmarried = document.getElementById('notmarried');
const married = document.getElementById('married');
const maritial = document.getElementById('maritial');
const gender = document.getElementById('gender');
let spouse = document.getElementById('spouse');
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
function isTermscheck(){
  if(!checkbox.checked) 
  { 
   checkbox.style.outline="2px solid red";
   return false;
   
 }
 return true;
}
function isGendercheck(){
  if(!(male.checked || female.checked || other.checked))
  {
    gender.style.color="red";
    return false;
  }
  return true;
}
function isMarriedcheck(){
  if(!(married.checked || notmarried.checked ))
  {
    maritial.style.color="red";
    return false;
  }
  return true;
}
function onsubmitt() {
let flag=true;
  flag &=isTermscheck();
  flag &=isGendercheck();
  flag &=isMarriedcheck();

  return flag;
 
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
function validEmail(input,inputText){
  if(!isEmail(inputText)){
    input.style.border="1px solid red";
  return false; 
  }else
  {
    input.style.border="1px solid #2ecc71";
  }
  return true;
}
function isSpouse(input,inputText){
  if(inputText ==="")
  {
    input.style.border="1px solid red";
    return false;
  }
  else{
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
  bool &=validEmail(email,inputText);

//if married button is checked but name of spouse is not there

  if(married.checked){
  let text=document.forms["myForm"]["spouse"].value.trim();
    bool &=isSpouse(spouse,text);
  }
  return bool;
}
function validateform(){
  return (onsubmitt() & onempty());
}




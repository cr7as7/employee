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
const inputField = document.getElementsByClassName("input");
const error = document.getElementsByClassName('Td');
// console.log(inputField);
let storearray = [];


function display() {
  const tableData = document.getElementById("table");
  let x = localStorage.getItem(localStorage.key(0));
  console.log(JSON.parse(x)[ 0 ].firstName);
  let arr = JSON.parse(x);
  console.log(arr);
  document.getElementById("table").innerHTML = "";
  document.getElementById("table").innerHTML = ` <tr id="fcfs">
<td>First Name&emsp;</td>
<td>Last Name&emsp;</td>
<td>Gender&emsp;</td>
<td>Maritial Status&emsp;</td>
<td>Spouse&emsp;</td>
<td>Email&emsp;</td>

</tr>`;
  for (let i = 0; i < arr.length; i++) {
    document.getElementById('table').innerHTML += `<tr>
<td>${arr[ i ].firstName}</td>
<td>${arr[ i ].lastName}</td>
<td>${arr[ i ].gender}</td>
<td>${arr[ i ].maritialStatus}</td>
<td>${arr[ i ].spouseName}</td>
<td>${arr[ i ].email}</td>

</tr>`
  }
}
function enable() {
  document.getElementById("spouse").disabled = false;
  inputField[4].classList.add('borderGreen');
  error[4].style.visibility="hidden";

}
function disable() {
  document.getElementById("spouse").value = "";
  document.getElementById("spouse").disabled = true;
  inputField[4].classList.remove('border');
  error[4].style.visibility="hidden";
    
}
function isTermscheck() {
  if (!checkbox.checked) {
    
    error[6].style.visibility = "visible";
    error[6].style.color="red";
    // checkbox.style.outline = "2px solid red";
    return false;

  }
  error[ 6 ].style.visibility = "hidden";
  return true;
}
function isGendercheck() {
  if (!(male.checked || female.checked || other.checked)) {
    error[2].style.visibility = "visible";
    error[ 2 ].style.color = "red";
    return false;
  }
  error[2].style.visibility = "hidden";
  return true;
}
function isMarriedcheck() {
  if (!married.checked && !notmarried.checked) {
    error[3].style.visibility = "visible";
    error[ 3 ].style.color = "red";
    return false;
  }
  error[3].style.visibility = "hidden";
  return true;
}

function isEmail(emailval) {
  var atSymbol = emailval.indexOf("@");
  if (atSymbol < 1)
    return false;
  var dot = emailval.lastIndexOf('.');
  if (dot <= atSymbol + 2)
    return false;
  if (dot === emailval.length - 1)
    return false;

  return true;

}
function isInputempty(input, inputText) {
  if (inputText == "") {
    input.style.border = "1px solid red";
    return false;
  } else {
    input.style.border = "1px solid #2ecc71";
  }
  return true;
}
function validEmail(input, inputText) {
  if (!isEmail(inputText)) {
    input.style.border = "1px solid red";
    return false;
  } else {
    input.style.border = "1px solid #2ecc71";
  }
  return true;
}
function isSpouse(input, inputText) {
  if (inputText === "") {
    input.style.border = "1px solid red";
    return false;
  }
  else {
    input.style.border = "1px solid #2ecc71";
  }
  return true;
}

function genderString() {
  if (male.checked) {
    return "Male";
  } else if (female.checked) {
    return "Female";
  } else {
    return "Other";
  }
}
function maritialString() {
  if (married.checked) {
    return "Married";
  }
  else {
    return "Not married";
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function wifeString() {

  if (married.checked) {
    return spouse.value;
  }
  else {
    return "N/A";
  }

}
function inputColorNormal(input) {

  input.style.border = "";

}
function allColorNormal() {
  inputColorNormal(firstname);
  inputColorNormal(lastname);
  inputColorNormal(spouse);
  inputColorNormal(email);
  gender.style.color = "";
  maritial.style.color = "";
  checkbox.style.outline = "";


}
function isRadio(){

if(married.checked)
{
  if(spouse.value.trim() !== "")
  {
    return true;
  }
  else{
    return false;
  }
  
}
else{
  if(spouse.value.trim() !== "")
  {
    return false;
  }
  else{
    return true;
  }
}

}
function validateform() {

  
  console.log(inputField);
  console.log(error);

  for (let i = 0; i < inputField.length; i++) {
    if (i === 2) {
      let gen = isGendercheck();
    } else if (i === 3) {
      let mar = isMarriedcheck();
    } else if(i===6){
      let check=isTermscheck();
    }
    else {
      inputValid(i);
    }
  }



  let male_or_female = genderString();
  let maritial = maritialString();
  let wife = wifeString().trim();
  let Email = email.value;



  const obj = {
    firstName: capitalizeFirstLetter(firstname.value),
    lastName: capitalizeFirstLetter(lastname.value),
    gender: male_or_female,
    maritialStatus: maritial,
    spouseName: capitalizeFirstLetter(wife),
    email: Email
  }
  console.log(obj.firstName)
  if(obj.firstName!==""&&obj.LastName!==""&&isEmail(obj.email)&&isRadio())
  {
    storearray.push(obj);
  console.log(storearray);
  localStorage.setItem("added-items", JSON.stringify(storearray));
  form.reset();
  allColorNormal();
  display();
  
  }
  

  return false;

}



function inputValid(index) {
 
  if (inputField[ index ].value.trim() === "") {
    error[ index ].style.visibility = "visible";
    // console.log(inputField[ 0 ].innerText.length);
    error[ index ].style.color = "red";
    // inputField[ index ].style.border="1px solid red";
    inputField[index].classList.add('border');
    inputField[index].classList.remove('borderGreen');
    
    return;
  }
  else {

    error[ index ].style.visibility = "hidden";
    inputField[index].classList.add('borderGreen');
    inputField[index].classList.remove('border');
    return;
  }
}

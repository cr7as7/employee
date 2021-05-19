const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');


form.addEventListener('submit',(event) => {
  event.preventDefault();
  validate();
})

const validate = () => {
  
const firstname = firstname.value.trim();
const lastname = lastname.value.trim();
const email = email.value.trim();
}

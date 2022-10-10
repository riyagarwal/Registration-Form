function validate() {
  let firstName = document.getElementById("first-name").value;

  let lastName = document.getElementById("last-name").value;

  let city = document.getElementById("city").value;

  let email = document.getElementById("email").value;

  let state = document.getElementById("state").value;

  let zip = document.getElementById("zip").value;

  let tnc = document.getElementById("t-and-c").checked;

  let error = false

  // VALIDATION

  // first name
  if (firstName.length >= 2) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
    error = true;
  }

  // last name
  if (lastName.length >= 2) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
    error = true;
  }

  /* Email validation
       include @
       include .
       atleast 1 character before @        - @riya@gmail.com (This is wrong)
       atleast 2 characters after last (.) - riya@gmail. (This is wrong)
    */

  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") > 0 &&
    email.length - email.lastIndexOf(".") >= 3
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error = true;
  }

//   city validation

if(city.length < 3) {
    document.getElementById("city-invalid").style.display = "block";
    document.getElementById("city-valid").style.display = "none";
    error = true;
}
else{
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
}

// state validation
if(state != 'None') {
    document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
}
else{
    document.getElementById("state-invalid").style.display = "block";
    document.getElementById("state-valid").style.display = "none";
    error = true;
}

// zip validation
if((zip.length == 6) && (!isNaN(zip))) {
    document.getElementById("zip-valid").style.display = "block";
    document.getElementById("zip-invalid").style.display = "none";
    
}
else{
    document.getElementById("zip-invalid").style.display = "block";
    document.getElementById("zip-valid").style.display = "none";
    error = true;
}

// TnC validation
if(tnc) {  
    document.getElementById("t-and-c-invalid").style.display = "none";
}
else{
    document.getElementById("t-and-c-invalid").style.display = "block";
    error = true;
}

/* If no error:-
1. Reset the form, valid abd invalid msgs
2. Alert: Your details have been saved successfully
*/

if(!error) {
  // Resetting values
  /* document.getElementById("first-name").value = '';
  document.getElementById("last-name").value = '';
  document.getElementById("city").value = '';
  document.getElementById("email").value = '';
  document.getElementById("state").value = '';
  document.getElementById("zip").value = '';
  document.getElementById("t-and-c").checked = false;   */

  document.getElementById("registration-form").reset()

  // Resetting msgs
  let validFeedbacks = document.getElementsByClassName("valid-feedback");
  for(let i = 0; i<validFeedbacks.length; i++) {
    validFeedbacks[i].style.display = 'none'
  }
  
  // alert message
  window.alert('Your details have been saved successfully!')
}

}

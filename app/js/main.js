
// Firebase Cred
var config = {
   apiKey: "AIzaSyBLnfnYLjurw5KkHJJHth5OqQ-pDWrcNgs",
    authDomain: "campaigndriverdemo.firebaseapp.com",
    databaseURL: "https://campaigndriverdemo.firebaseio.com",
    projectId: "campaigndriverdemo",
    storageBucket: "campaigndriverdemo.appspot.com",
    messagingSenderId: "713205211050"
};
firebase.initializeApp(config);

// Reference messages collection
var studentsRef = firebase.database().ref('students');

/* BOOSTRAP4 VALIDATION
-----------------------*/ 

// Requires class="form-control" added to input
// Add feedback divs directly after inputs for them to display on submit
// <div class="invalid-feedback" >Please choose an option</div>
// <div class="valid-feedback"> Looks good!</div>
 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
      	console.log('form.checkValidity()',form.checkValidity());
      	event.preventDefault();
        event.stopPropagation();
        //event.stopImmediatePropagation();
        form.classList.add('was-validated');
    if (form.checkValidity() === true) {
    	console.log('VALID!');
    	 // alert("Validation passed !\nForm submitted...");
         // SEND FORM DATA (Firebase) 
         // Get values
          var firstName = getInputVal('input--first_name');
          var lastName = getInputVal('input--last_name');
          var phone = getInputVal('input--phone');
          var email = getInputVal('input--email');
          var eduLevel = getMultiInputVal('eduLevel');

		  // Show alert
		  document.querySelector('.alert').style.display = 'block';

		  // Hide alert, remove validation and rest form after 3 seconds
		  setTimeout(function(){
		    document.querySelector('.alert').style.display = 'none';
		    form.classList.remove('was-validated');
			 // Clear form
		   document.getElementById('contactForm').reset();
		  },3000);

		 // Save message
		  saveMessage(firstName, lastName, phone, email, eduLevel);

		  // /SEND FORM DATA (Firebase) 
   }
      }, false);
    });
  }, false);
})();


// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Function to get get form values from multiple select radio buttons
function getMultiInputVal(name){
	//console.log("document.querySelector('input')");
	//console.log(document.querySelector('input'));
	  return document.querySelector('input[name="eduLevel"]:checked').value;
}

// Save message to firebase
function saveMessage(firstName, lastName, phone, email, eduLevel){
	console.log('FUNCTIONsaveMessage()');
  var newStudentsRef = studentsRef.push();
  newStudentsRef.set({
    firstName: firstName,
    lastName:lastName,
    phone:phone,
    email:email,
    eduLevel:eduLevel
  });
}



/* CUSTOM VALIDATION
-----------------------*/ 

/*const signUpForm = document.getElementById('contactForm');
const emailField = document.getElementById('input--email');
const submitButton = document.getElementById('contactForm__submit');
const invalidClassName = 'invalid';

emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  
    if ( isValidEmail ) {
  emailField.classList.remove(invalidClassName);
    okButton.disabled = false;
  } else {
  emailField.classList.add(invalidClassName);
    okButton.disabled = true;
  }
});

submitButton.addEventListener('click', function (event) {
  signUpForm.submit();
});
*/


/*var inputs = document.querySelectorAll('input, select, textarea');
const invalidClassName = 'invalid';

inputs.forEach(function (input) {
  // Add a css class on submit when the input is invalid.
  input.addEventListener('invalid', function () {
    input.classList.add(invalidClassName);
  });

  // Remove the class when the input becomes valid.
  // 'input' will fire each time the user types
  input.addEventListener('input', function () {
    if (input.validity.valid) {
      input.classList.remove(invalidClassName);
    }
  });
})*/


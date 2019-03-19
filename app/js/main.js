console.log('This is the Main.js file. It should be the 3rd and final file');

// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx"
};
firebase.initializeApp(config);

// Reference messages collection
var studentsRef = firebase.database().ref('students');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstName = getInputVal('input--first_name');
  var lastName = getInputVal('input--last_name');
  var phone = getInputVal('input--phone');
  var email = getInputVal('input--email');
  var eduLevel = getMultiInputVal('eduLevel');

  // Save message
  saveMessage(firstName, lastName, phone, email, eduLevel);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Function to get get form values from multiple select radio buttons
function getMultiInputVal(name){
  return document.querySelector('input[name="eduLevel"]:checked').value;
}

// Save message to firebase
function saveMessage(firstName, lastName, phone, email, eduLevel){
  var newStudentsRef = studentsRef.push();
  newStudentsRef.set({
    firstName: firstName,
    lastName:lastName,
    phone:phone,
    email:email,
    eduLevel:eduLevel
  });
}
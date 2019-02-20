// Initialize Firebase
var config = {
  apiKey: "AIzaSyBmMlxDADm1TdH0CFBU-vCiqvX6Q493kk0",
  authDomain: "contact-form-e339f.firebaseapp.com",
  databaseURL: "https://contact-form-e339f.firebaseio.com",
  projectId: "contact-form-e339f",
  storageBucket: "contact-form-e339f.appspot.com",
  messagingSenderId: "377647543829"
};
firebase.initializeApp(config);

// REFERENCE MESSAGES COLLECTION
const messagesRef = firebase.database().ref("messages");

// LISTEN FOR FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", submitForm);

// SUBMIT FORM
function submitForm(e) {
  e.preventDefault();

  // GET VALUES
  let fname = getInputValue("fname");
  let lname = getInputValue("lname");
  let email = getInputValue("email");
  let phone = getInputValue("phone");
  let message = getInputValue("message");

  // SAVE MESSAGE
  saveMessage(fname, lname, email, phone, message);

  // SHOW ALERT
  document.querySelector(".alert").style.display = "block";

  // HIDE ALERT
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // CLEAR FORM
  document.getElementById("contactForm").reset();
}

// FUNCTION TO GET FORM VALUES
function getInputValue(id) {
  return document.getElementById(id).value;
}

//  SAVE MESSAGE TO FIREBASE
function saveMessage(fname, lname, email, phone, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    message: message
  });
}

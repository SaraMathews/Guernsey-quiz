//Open modal when rules btn is clicked
// Gets id's and classes from the dom
let modal = document.getElementById("rules-modal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// Opens the modal when the user clicks the rules btn
btn.onclick = function() {
  modal.style.display = "block";
}

// Closes the modal when user clicks on <span> (x)
span.onclick = function() {
  modal.style.display = "none";
}

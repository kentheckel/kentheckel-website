"use strict";

// Get the modal
var aboutModal = document.getElementById('ModalAbout');
var notesModal = document.getElementById('ModalNotes');
var pressModal = document.getElementById('ModalPress');
var contactModal = document.getElementById('ModalContact');
var socialModal = document.getElementById('ModalSocial');
var puzzleModal = document.getElementById('ModalPuzzle');

// Get the button that opens the modal
var aboutBtn = document.getElementById("aboutBtn");
var notesBtn = document.getElementById("notesBtn");
var pressBtn = document.getElementById("pressBtn");
var contactBtn = document.getElementById("contactBtn");
var socialBtn = document.getElementById("socialBtn");
var puzzleBtn = document.getElementById("puzzleBtn");
// var aboutBtn = document.getElementById("tabButton");
// var contactBtn = document.getElementById("startButton");

// Get the <span> element that closes the modal
var aboutClose = document.getElementById("aboutClose");
var notesClose = document.getElementById("notesClose");
var pressClose = document.getElementById("pressClose");
var contactClose = document.getElementById("contactClose");
var socialClose = document.getElementById("socialClose");
var puzzleClose = document.getElementById("puzzleClose");

// When the user clicks on the button, open the modal 
aboutBtn.onclick = function() {
  aboutModal.style.display = "block";
}
notesBtn.onclick = function() {
  notesModal.style.display = "block";
}
pressBtn.onclick = function() {
  pressModal.style.display = "block";
}
contactBtn.onclick = function() {
  contactModal.style.display = "block";
}
socialBtn.onclick = function() {
  socialModal.style.display = "block";
}
puzzleBtn.onclick = function() {
  puzzleModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
aboutClose.onclick = function(event) {
  aboutModal.style.display = "none";
}
notesClose.onclick = function(event) {
  notesModal.style.display = "none";
}
pressClose.onclick = function(event) {
  pressModal.style.display = "none";
}
contactClose.onclick = function(event) {
  contactModal.style.display = "none";
}
socialClose.onclick = function(event) {
  socialModal.style.display = "none";
}
puzzleClose.onclick = function(event) {
  puzzleModal.style.display = "none";
}
// Make the DIV element draggable:
dragElement(document.getElementById('ModalAbout'));
// Make the DIV element draggable:
dragElement(document.getElementById('ModalNotes'));
// Make the DIV element draggable:
dragElement(document.getElementById('ModalPress'));
// Make the DIV element draggable:
dragElement(document.getElementById('ModalContact'));
// Make the DIV element draggable:
dragElement(document.getElementById('ModalSocial'));
// Make the DIV element draggable:
dragElement(document.getElementById('ModalPuzzle'));



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

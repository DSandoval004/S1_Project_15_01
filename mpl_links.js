"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Diego Sandoval
   Date:   April 18, 2019 (04/18/19)
   
   Filename: mpl_links.js

*/
// DDOES: Adds an event listener to the document for when it loads
window.addEventListener('load', function () {
    // DVARA: Creats an array of the form select elements
    var allSelected = document.querySelectorAll('form#govLinks select');
    // DLOOP: Loops throught the allSelected list and adds an anyomous function to them to change the location of the page when an option is selected
    for (var i = 0; i < allSelected.length; i++) {
        allSelected[i].onchange = function (e) {
            location.assign(e.target.value)
        }
    }
});
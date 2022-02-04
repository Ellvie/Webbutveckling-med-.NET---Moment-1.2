"use strict"


//Variables
let startLi = document.getElementById("start");
let razorLi = document.getElementById("razor");
let aboutLi = document.getElementById("about");
let startA = document.getElementById("startA");
let razorA = document.getElementById("razorA");
let aboutA = document.getElementById("aboutA");

//Eventlisteners
startLi.addEventListener("click", start);
razorLi.addEventListener("click", razor);
aboutLi.addEventListener("click", about);


//Functions to redirect on li-click
function start() {
    window.location = "/";
}

function razor() {
    window.location = "/Razor";
}

function about() {
    window.location = "/About";
}

//if-statements to check what page we're on and what menu item is active
if (window.location.href.indexOf("") > - 1) {
    //li
    startLi.style.backgroundColor = "#3a849a";
    startA.style.color = "#fff";
}

if (window.location.href.indexOf("Razor") > - 1) {
    //li
    startLi.style.backgroundColor = "unset";
    razorLi.style.backgroundColor = "#3a849a";
    
    //a
    startA.style.color = "unset";
    razorA.style.color = "#fff";
}

if (window.location.href.indexOf("About") > - 1) {
    //li
    startLi.style.backgroundColor = "unset";
    aboutLi.style.backgroundColor = "#3a849a";

    //a
    startA.style.color = "unset";
    aboutA.style.color = "#fff";
}
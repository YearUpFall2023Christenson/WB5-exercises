"use strict";

window.onload = function(){
    const googleBtn = document.getElementById("googleBtn");
    const w3schoolsBtn = document.getElementById("w3schoolsBtn");
    const imagesBtn = document.getElementById("imagesBtn");

    googleBtn.onclick = googleBtnClick;
    w3schoolsBtn.onclick = w3schoolsBtnClick;
    imagesBtn.onclick = imagesBtnClick;
};


function googleBtnClick(){
    const allDivs = document.getElementsByTagName("div");
    let numDivs = allDivs.length
    for (let i = 0; i < numDivs; i++) {
    allDivs[i].style.border = "2px solid red";
    }
};

function w3schoolsBtnClick(){
    const msgAreas = document.getElementsByClassName("msgArea");
    let numMessageAreas = msgAreas.length
    for (let i = 0; i < numMessageAreas; i++) {
    msgAreas[i].style.border = "2px solid blue";
    }
};

function imagesBtnClick(){
    Array.from(document.querySelectorAll("div")).forEach((element) => element.style.border = "2px dotted orange");
};

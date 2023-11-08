"use strict";


window.onload = function() {
    const p = document.getElementById("p");
    p.innerHTML = location.href;

    //window.open();

    setTimeout(
        function() {
            window.open("https://www.w3schools.com/js/js_htmldom.asp");
        //location.href = "https://www.traveltexas.com/";
        },
        5000
        );
};
const modal = document.getElementById("aboutModel");

var btn2 = document.getElementById("about-modal-link2");
var btn = document.getElementById("about-modal-link");
const span = document.getElementsByClassName("close")[0];

btn2.onclick = function() {
    modal.style.display = "block";
}
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none"; 
} 


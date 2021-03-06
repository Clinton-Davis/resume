const modal = document.getElementById("aboutModel");

var btn2 = document.getElementById("about-modal-link2");
var btn = document.getElementById("about-modal-link");
const span = document.getElementsByClassName("close")[0];

btn2.onclick = function () {
    modal.style.display = "block";
    startAnimation()
}
btn.onclick = function () {
    modal.style.display = "block";
    startAnimation()
}

span.onclick = function () {
    modal.style.display = "none";
}

function startAnimation() {
    const tl = gsap.timeline()
    tl.fromTo(".progress-bar-fill-html", { width: "0%" }, { width: "92%", duration: 1 })
        .fromTo(".progress-bar-fill-css", { width: "0%" }, { width: "87%", duration: 2 }, "-=1")
        .fromTo(".progress-bar-fill-js", { width: "0%" }, { width: "75%", duration: 2 }, "-=1.1")
        .fromTo(".progress-bar-fill-py", { width: "0%" }, { width: "70%", duration: 2 }, "-=1.2")
        .fromTo(".progress-bar-fill-s ", { width: "0%" }, { width: "84%", duration: 2 }, "-=1.3");
}

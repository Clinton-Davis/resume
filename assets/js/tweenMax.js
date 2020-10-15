
const mainHeading = document.querySelector('.hero');
const animate = document.querySelector('.animate');
const animate2 = document.querySelector('.animate2');
const animate3 = document.querySelector('.animate3');
const animate4 = document.querySelector('.animate4');
const animate5 = document.querySelector('.animate5');
const animate6 = document.querySelector('.animate6');
const subHeading = document.querySelector('.subHeading');
const headinInfo = document.querySelector('.headinInfo');


const tl = new TimelineMax();


tl.fromTo(animate,1.2, { opacity: "0"}, {opacity: "1"});
tl.fromTo(animate2,.3, { opacity: "0"}, {opacity: "1"});
tl.fromTo(animate3,.4, { opacity: "0"}, {opacity: "1"});
tl.fromTo(animate4,.5, { opacity: "0"}, {opacity: "1"});
tl.fromTo(animate5,.6, { opacity: "0"}, {opacity: "1"});
tl.fromTo(animate6,.7, { opacity: "0"}, {opacity: "1"});

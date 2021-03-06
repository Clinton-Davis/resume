const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(
  ".big",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, rotation: 360, stagger: 0.15 },
  "+=2"
);
tl.fromTo(
  ".left",
  { x: "-100000%" },
  { x: "0%", duration: 0.5, rotation: 360, stagger: 0.05 }
);
tl.fromTo(
  ".right",
  { x: "100000%" },
  { x: "0%", duration: 0.5, rotation: 360, stagger: 0.05 }
);
tl.fromTo(
  ".left2",
  { x: "-100000%" },
  { x: "0%", duration: 0.5, rotation: 360, stagger: 0.05 }
);
tl.fromTo(
  ".fade",
  { opacity: 0 },
  { opacity: 1, duration: 0.75, stagger: 0.1 }
);

tl.fromTo(".headinInfo", { opacity: "0" }, { opacity: "1", duration: 1 });
tl.fromTo("#top-nav", { y: "-1000%" }, { y: "0%", duration: 1.3 }, "-=1.5");
tl.fromTo(".img", { y: "-1000%" }, { y: "0%", duration: 1.3 }, "-=1.5");

tl.fromTo("#btm-nav", 1.3, { y: "1000%" }, { y: "0%", duration: 1.3 }, "-=1.5");
tl.fromTo(".logo-name", { x: "-1000%" }, { x: "0%", duration: 1.3 }, "-=1.5");
tl.fromTo(".shadow5", { height: "0%" }, { height: "90%", duration: 1 }, "-=1");
tl.fromTo(".info", { opacity: "0" }, { opacity: "1", duration: 1.2 });
tl.fromTo(".nav-links", { x: "100%" }, { x: "0%", duration: 1 }, "-=2");
tl.fromTo(
  ".hero",
  { color: "#003d57" },
  { color: "#ffffff ", duration: 5 },
  "-=4"
);

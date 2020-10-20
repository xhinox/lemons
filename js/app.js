// FIRST SECTION
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const title = intro.querySelector("h1");
// END SECTION

// SECOND SECTION
const section = document.querySelector("section");
const secondTitle = section.querySelector("h2");
// END SECTION

// SCROLL MAGIC
const controller = new ScrollMagic.Controller();

// SCENES
const scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

// VIDEO animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);

/*
nota: 33.3 es el framerate al que el video correo
si el video corre a 30 fps, seria: 1000 (1seg) / 30 (fps) == 33.33333333
si el video correo a 24 fps, seria: 1000 / 24 = 41.666666667
*/

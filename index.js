// Detection Button Press
const buttons = document.querySelectorAll(".beat");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.querySelector("span").innerHTML.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
  });
});

// Detection Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "q":
      var conga = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/22[kb]conga1.aif.mp3"
      );
      conga.play();
      break;
    case "w":
      var hiHat = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/4[kb]cl_hihat.aif.mp3"
      );
      hiHat.play();
      break;
    case "e":
      var handClap = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/31[kb]handclap.aif.mp3"
      );
      handClap.play();
      break;
    case "r":
      var highTom = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/17[kb]hightom.aif.mp3"
      );
      highTom.play();
      break;
    case "t":
      var openHighHat = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/51[kb]open_hh.aif.mp3"
      );
      openHighHat.play();
      break;
    case "y":
      var snare = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/808%20Basic/8[kb]snare.aif.mp3"
      );
      snare.play();
      break;
    case "u":
      var lowConga = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/16[kb]80s-LOWCONGA.aif.mp3"
      );
      lowConga.play();
      break;
    case "i":
      var crash = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3"
      );
      crash.play();
      break;
    case "o":
      var tamb = new Audio(
        "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-TAMB1.aif.mp3"
      );
      tamb.play();
      break;

    default:
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("playing");
  setTimeout(function () {
    activeButton.classList.remove("playing");
  }, 100);
}

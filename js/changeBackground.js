index = 0;

function changeBackground() {
  const backgrounds = [
    "url('assets/backgrounds/bg-img.jpg')",
    "url('assets/backgrounds/bg-img2.jpg')",
    "url('assets/backgrounds/bg-img3.jpg')",
    "url('assets/backgrounds/bg-img4.jpg')",
    "url('assets/backgrounds/bg-img5.jpg')",
    "url('assets/backgrounds/bg-img6.jpg')",
    "url('assets/backgrounds/bg-img7.jpg')"
  ];
  if (index == 6){
    index = 0;
  } else {
    index++;
  }
  const backgroundElement = document.getElementById('background');
  backgroundElement.style.backgroundImage = backgrounds[index];
}
const images = [
  "aurora.jpg",
  "ice.jpg",
  "penguins.jpg",
  "rock.jpg",
  "sky.jpg",
  "space.jpg",
  "waterfall.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg";

document.body.appendChild(bgImage);

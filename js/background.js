const images = ["aurora.jpg", "rock.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg";

document.body.appendChild(bgImage);

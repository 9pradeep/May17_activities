const jokes = [

  "Why did the Borg cross the road? To assimilate the chicken!",

"How do you know you're a true Star Trek fan? When you try to use a Vulcan mind meld to remember where you left your keys.",

  "Why did the Borg go on vacation? They wanted to be assimilated to a different culture.",

  "Why did Worf change his hair color? It was a good day to dye!",

  "What do you call a spaceship with a broken air-conditioner? A frying saucer!",

  "Why don't the Borg play cards? Poker is irrelevant!",

  "Why did the Klingon break up with his girlfriend? She had no honor!",

  "Why did the Ferengi go to the doctor? His lobes were sore!",

  "What do you call a group of musical Klingons? A Klingon-Quartet!",

  "Why did the Vulcan go to therapy? He had emotional baggage!"

];
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg"
];

const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");
const jokeImage = document.getElementById("jokeImage");

jokeButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);

  if (randomIndex < images.length) {
    jokeText.textContent = jokes[randomIndex];
    jokeImage.src = images[randomIndex];
  } else {
    console.error("Mismatched array lengths: jokes and images arrays should have the same number of elements.");
  }
});


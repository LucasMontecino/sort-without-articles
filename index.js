const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedBands = bands.sort((a, b) => {
  return sortedFunction(a) > sortedFunction(b) ? 1 : -1;
});

function sortedFunction(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}

console.log(sortedBands);

const bandsList = document.querySelector("#bands");

sortedBands.forEach((band) => {
  bandsList.innerHTML += `<li>${band}</li>`;
});

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

function customCompare(a, b) {
  const articles = ["The", "A", "An"];

  function removeArticles(bandName) {
    for (const article of articles) {
      if (bandName.startsWith(article + " ")) {
        return bandName.slice(article.length + 1);
      }
    }
    return bandName;
  }

  const bandA = removeArticles(a);
  const bandB = removeArticles(b);

  return bandA.localeCompare(bandB);
}

const lista = document.querySelector("#bands");

const bandSorted = bands.sort(customCompare);

bandSorted.forEach((band) => {
  lista.innerHTML += `
        <li>${band}</li>
    `;
});

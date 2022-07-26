const categoryLink = document.querySelectorAll(".category-link");

categoryLink.forEach((categoryLink) => {
  categoryLink.addEventListener("click", categorySearchHandler);
});

async function categorySearchHandler(event) {
  const categoryId = this.id;

  const response = await fetch(`api/category/${categoryId}`, {
    method: "GET",
  });

  if (response.ok) {
    response.json().then((data) => {
      const jokes = data.jokes;
      const resultContainer = document.querySelector(
        "#search-result-container"
      );
      resultContainer.textContent = "";

      jokes.forEach((joke) => {
        const setup = joke.setup;
        const punchline = joke.punchline;
        const jokeEl = document.createElement("p");
        jokeEl.textContent = setup + " " + punchline;
        resultContainer.appendChild(jokeEl);
      });
    });
  } else {
    alert(response.statusText);
  }
}

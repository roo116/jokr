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
        "#joke-card-container"
      );
      resultContainer.innerHTML = "";

      jokes.forEach((joke) => {
        const setup = joke.setup;
        const punchline = joke.punchline;
        const jokeCardEl = document.createElement("div");
        jokeCardEl.innerHTML = `
        <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <p>${setup}</p>
            <br>
            <p>${punchline}</p>
          </div>
          <div class="card-action">
            <button class="btn" type="button">Save</button>
          </div>
        </div>
      </div>
        `;
        jokeCardEl.classList.add("joke-card");
        resultContainer.appendChild(jokeCardEl);
      });
    });
  } else {
    alert(response.statusText);
  }
}

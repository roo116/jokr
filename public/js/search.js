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
      const resultContainer = document.querySelector("#joke-card-container");
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
            <button class="save-btn btn" data-id="${joke.id}" type="button">Save</button>
          </div>
        </div>
      </div>
        `;
        jokeCardEl.classList.add("joke-card");
        resultContainer.appendChild(jokeCardEl);
      });
      const saveButtons = document.querySelectorAll(".save-btn");
      saveButtons.forEach((saveButton) => {
        saveButton.addEventListener("click", saveJokeHandler);
      });
    });
  } else {
    alert(response.statusText);
  }
}

async function saveJokeHandler(event) {
  // re-save attempt handling before page reload
    document.querySelector("#alert-container").textContent = "";
    //TODO: check to see if the joke is saved or not, add result to below if statement
    const text = this.textContent;
    if (text === "Saved!") {
      document.querySelector("#alert-container").textContent =
        "That joke has already been saved to your favorites!";
      return;
    }

    //save the joke
    const joke_id = this.dataset.id;

    const response = await fetch(`api/savedjokes/`, {
      method: "POST",
      body: JSON.stringify({
        joke_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      this.textContent = "Saved!";
    } else {
      alert(response.statusText);
    }
}
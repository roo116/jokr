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
        saveButton.addEventListener("click", checkSavedJokes);
      });
    });
  } else {
    alert(response.statusText);
  }
}

async function checkSavedJokes(event) {
  // reset alert container
  document.querySelector("#alert-container").textContent = "";
  //get joke id from html
  const joke_id = this.dataset.id;

  // check to see if the joke is already saved
  const check = await fetch(`api/savedjokes/${joke_id}`, {
    method: "GET",
  });

  if (check.ok) {
    check.json().then((data) => {
      // if it isn't saved, save it
      if (!data) {
        saveJoke(this);
      }
      // if it is saved, tell the client
      else {
        document.querySelector(
          "#alert-container"
        ).textContent = `${data.message}`;
      }
    });
  } else {
    alert(response.statusText);
  }
}

// save a joke
async function saveJoke(buttonEl) {
  const joke_id = buttonEl.dataset.id;
  //save the joke
  const response = await fetch(`api/savedjokes/`, {
    method: "POST",
    body: JSON.stringify({
      joke_id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    buttonEl.textContent = "Saved!";
  } else {
    alert(response.statusText);
  }
}

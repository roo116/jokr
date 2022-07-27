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
        jokeCardEl.addEventListener("click", saveJokeHandler);
        resultContainer.appendChild(jokeCardEl);
      });
    });
  } else {
    alert(response.statusText);
  }
}

async function saveJokeHandler(event) {
    const joke_id = this.querySelector('.save-btn').dataset.id;
    // console.log(joke_id);

    const response = await fetch(`api/savedjokes/`, {
      method: "POST",
      body: JSON.stringify({
        joke_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log('response ok')
    } else {
      alert(response.statusText);
    }
}
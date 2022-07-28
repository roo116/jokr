const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", deleteJokeHandler);
});

async function deleteJokeHandler(event) {
  document.querySelector("#alert-container").textContent = "";
  const text = this.textContent;
  if (text === "Deleted!") {
    document.querySelector("#alert-container").textContent =
      "That joke has already been deleted from your favorites!";
    return;
  }
  const savedJokeId = this.dataset.id;

  const response = await fetch(`api/savedjokes/${savedJokeId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    this.textContent = "Deleted!";
  } else {
    alert(response.statusText);
  }
}

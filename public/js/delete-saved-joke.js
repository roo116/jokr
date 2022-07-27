const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", deleteJokeHandler);
});

async function deleteJokeHandler(event) {
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

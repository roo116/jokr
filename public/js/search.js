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
    console.log(response.json());
  } else {
    console.log("OOPS");
  }
}

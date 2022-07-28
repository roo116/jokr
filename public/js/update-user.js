async function updateFormHandler(event) {
    event.preventDefault();
    //   document.location.replace("/");
    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (username && email && password) {
      // const userId = this.dataset.id;
      const userId = 14;
      // console.log(">>> checkid ", userId);
      console.log(sessionStorage.getItem('user_id'));
      const response = await fetch(`/api/users/:id`, {
        method: "PUT",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // check the response status
      if (response.ok) {
        console.log(response);
        console.log("---------success---------");
        this.textContent = "User Info Updated!";
        //   alert("User infor Updated");
        //   document.location.replace("/updateUser");
      } else {
        alert(response.statusText);
      }
    }
  }
  document
    .querySelector(".update-form")
    .addEventListener("submit", updateFormHandler);
  
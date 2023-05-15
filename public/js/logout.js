
const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", async (event) => {
  try {
    event.preventDefault();
    console.log("test")
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    if (response.ok) {
      location.reload();
    } else {
      next();
    }
  } catch (err) {}
});
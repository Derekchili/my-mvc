const completeBtn = document.querySelectorAll(".deleteButton");

completeBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    
    event.preventDefault();
    const postId = document.querySelector("#delete").dataset.id;
    
    // console.log("postId:", postId);
    const response = fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    location.reload();
  });
});




// const commentForm = document.querySelectorAll("form");
// // const commentInput = document.querySelector("#comment");
// // const commentBtn = document.querySelectorAll("button");

// document.querySelectorAll("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const projectObj = {
//     title: document.querySelector("#project").value,
//     content: document.querySelector("#content").value,
//   };

//   const response = fetch("/comments/", {
//     method: "POST",
//     body: JSON.stringify(projectObj),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     // If the response is successful, redirect to the comments page
//     window.location.href = "/comments";
//   } else {
//     // If there's an error, display an error message
//     alert("There was an error submitting your comment");
//   }
// });
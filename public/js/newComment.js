const commentForms = document.querySelectorAll("form");

commentForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const blogPostObj = {
      // title: form.querySelector("#title").value,
      content: form.querySelector("#content").value,
    };
    console.log("blogPostObj:", blogPostObj);
    const response = await fetch("/dashboard/", {
      method: "POST",
      body: JSON.stringify(blogPostObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // If the response is successful, redirect to the comments page
      window.location.href = "/comments";
    } else {
      // If there's an error, display an error message
      alert("There was an error submitting your comment");
    }
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
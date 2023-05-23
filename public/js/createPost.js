document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    
    const content = document.querySelector("#content").value;
    
    console.log("title:", title);
    
    console.log("content:", content);
    
    const PostObj = {
      title: document.querySelector("#title").value,
      content: document.querySelector("#content").value,
    };
    
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(PostObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
   
    const PostData = await response.json();
    const id = PostData.id;
    if (response.ok) {
      location.href = `/`;
    } else {
      alert("You have an error");
    }
  });

// document.querySelector("form").addEventListener("submit", async event=>{
//     event.preventDefault();
//     const PostObj = {
//         title: document.querySelector("#title").value,
//         due_date: document.querySelector("#due-date").value,
//     }
//     const response = await fetch("/api/Post", {
//         method: "POST",
//         body: JSON.stringify(PostObj),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         const PostData = await response.json()
//         const id = PostData.id
//         if(response.ok){
//             location.href = `/create-post/${id}`
//         } else{
//             alert("You have an error")
//         }
//     })

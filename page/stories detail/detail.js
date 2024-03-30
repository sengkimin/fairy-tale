

function fetchData() {
  fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
      const card = document.getElementById("single");
      for (let i = 0; i < 1; i++) {
        if (data[i].id) {
          card.innerHTML += `
         <div class="box">
          <h1>${data[i].title}</h1>
          <p>${data[i].author}</p>
         </div>
         <div class="image">
         <img src="${data[i].image}" alt="">
         </div>
          <div class="title">
         <p>${data[i].summary} </p>
         <p>${data[i].description}</p>
         </div>
         <div style="margin:auto;width:70%;" >
         <audio controls style="width:100%;margin-top:20px;">
         <source  src="${data[i].audio}" type="audio/mpeg">
         </audio>
         </div>

        
        `;
        }
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      return error;
    });
}

fetchData();

let params = new URLSearchParams(document.location.search);
let ID = params.get("id");

console.log(ID);
let URL = "https://fairy-tale-api-inky.vercel.app/api/fairytales/" + ID;

function fetchData() {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
      console.log(data.id);
      const card = document.getElementById("single")
          card.innerHTML += `
         <div class="box">
          <h1>${data.title}</h1>
          <p>${data.author}</p>
         </div>
         <div class="image">
         <img src="${data.image}" alt="">
         </div>
          <div class="title">
         <p>${data.summary} </p>
         <p>${data.description}</p>
         </div>
         <div style="margin:auto;width:70%;" >
         <audio controls style="width:100%;margin-top:20px;">
         <source  src="${data.audio}" type="audio/mpeg">
         </audio>
         </div>

        
        `;
        
      
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      return error;
    });
}

fetchData();

const a = window.location.search;
const urlParam = new URLSearchParams(a);
const id = urlParam.get("id")


function fetchData() {
  fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
            const card = document.getElementById('card');
     for(let i=0; i<data.length; i++) {
      if(data[i].id) {
        card.innerHTML += `
        <div class="card-container">
        <div class="box">${data[i].id} </div>
        <div>${data[i].title} </div>
        <div>${data[i].age} </div>
        <div>${data[i].image} </div>
        <div>${data[i].summary}</div>
        </div>

        
        `
      }
      
     }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      return error;
    });
  
}


fetchData ();









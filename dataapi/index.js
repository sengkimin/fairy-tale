// const a = window.location.search;
// const urlParam = new URLSearchParams(a);
// const id = urlParam.get("id")


// function fetchData() {
//   fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       return response.json();
//     })
//     .then((data) => {
//             const card = document.getElementById('card');
//      for(let i=0; i<data.length; i++) {
//       if(data[i].id) {
//         card.innerHTML += `
//         <div class="card-container">
//         <div class="box1">
//         <div class="box">${data[i].title} </div>
//         <div>${data[i].summary} </div>
//         <div>${data[i].author} </div>
        
//         <div >
//         <audio controls >
//                 <source src="${data[i].audio}" type="audio/mpeg" >
//         </audio>
//         </div>

        
//         `
//       }
      
//      }
//     })
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       return error;
//     });
  
// }


// fetchData ();







function fetchData() {
  fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
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
          <div class="box">
              <div class="box-img">
               <img src="${data[i].image}" alt="">
              </div>
              <div class="box-title"> 
              <p>${data[i].title}</p>
              <p>${data[i].summary}</p>
              <div class="box1">
               <p>${data[i].author}</p>
               <p>${data[i].created_at}</p>
              </div>
              
              
              <div>
              <audio controls style="width:100%;">
                <source src="${data[i].audio}" type="audio/mpeg">
              </audio>
             </div>
              </div>
          </div>
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

// Call the function to fetch and display data
fetchData();


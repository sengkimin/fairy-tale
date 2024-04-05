let params = new URLSearchParams(document.location.search);
let valand = params.get("age");

console.log(valand);
function test(element) {
  console.log(element.value)
  window.location.href = "/page/stories page/stories.html?age=" + element.value;
}

let url = "https://fairy-tale-api-inky.vercel.app/api/fairytales";

// let urlpara = url+'?'+${data[i].id};
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const card = document.getElementById("card");

    if (valand === "all") {
      for (let i = 0; i < data.length; i++) {
        card.innerHTML += `
       

        <a href="../../page/stories detail/detail.html?id=${data[i].id}" style=" text-decoration: none;" class="card-container">
        <div class="box">
            <div class="box-img">
             <img src="${data[i].image}" alt="">
            </div>
            <div class="box-title"> 
            <p>${data[i].title}</p>
            <p>${data[i].summary}</p>
          
            <div>
            <div class="box1">
             <p>${data[i].author}</p>
             <p>${data[i].created_at}</p>
            </div>
            <audio controls style="width:100%;">
              <source src="${data[i].audio}" type="audio/mpeg">
            </audio>
           </div>
            </div>
        </div>
      </a>`;
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].age === valand) {
          
          card.innerHTML += `
          
          <a href="../../page/stories detail/detail.html?id=${data[i].id}" style=" text-decoration: none;" class="card-container">
          <div class="box">
              <div class="box-img">
               <img src="${data[i].image}" alt="">
              </div>
              <div class="box-title"> 
              <p>${data[i].title}</p>
              <p>${data[i].summary}</p>
            
              <div>
              <div class="box1">
               <p>${data[i].author}</p>
               <p>${data[i].created_at}</p>
              </div>
              <audio controls style="width:100%;">
                <source src="${data[i].audio}" type="audio/mpeg">
              </audio>
             </div>
              </div>
          </div>
        </a>`;
        }
      }
    }
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));

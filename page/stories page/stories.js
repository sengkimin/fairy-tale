document.getElementById("form").innerHTML += `
 
   <div class="form-check form-check-inline">
      <input
      class="form-check-input"
  type="radio"
  name="inlineRadioOptions"
  id="inlineRadio1"
  value="option1"
  />
  <label class="form-check-label" for="inlineRadio1">All</label>
  </div>
  <div class="form-check form-check-inline">
  <input
  class="form-check-input"
  type="radio"
  name="inlineRadioOptions"
  id="inlineRadio 2"
  value="option2"
/>
<label class="form-check-label" for="inlineRadio2">0-3</label>
</div>
<div class="form-check form-check-inline">
<input
  class="form-check-input"
  type="radio"
  name="inlineRadioOptions"
  id="inlineRadio3"
  value="option3"
/>
<label class="form-check-label" for="inlineRadio3">4-6</label>
</div>
<div class="form-check form-check-inline">
<input
  class="form-check-input"
  type="radio"
  name="inlineRadioOptions"
  id="inlineRadio4"
  value="option3"
/>
<label class="form-check-label" for="inlineRadio3">7-12</label>
</div>

`;
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
        for(let i=0; i<3; i++) {
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
  
  
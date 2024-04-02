const Params = window.location.search;

const UrlParam = new URLSearchParams(Params);

const data =UrlParam.get("age");

let data1;
  
//   fetchData();
function dataHome () {
  fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
  
  .then ((Response) => {
    return Response.json();
  })
  .then ((data) => {
    let count =1;
    let container =document.querySelector(".card-container");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="0-3") {
        if(count<=3) {
          container.innerHTML += `
      
          <div class="card border-0">
                <img src="${data[i].image}" class="card-img-top"
                  alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data[i].title}</h5>
                  <p class="card-text">${data[i].summary}</p>
                <p>By: ${data[i].author}</p>
                </div>
              </div>
          `
        }
        count++;
      }
    }

    count=1;
    let container1 =document.querySelector(".card-container1");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="4-6") {
          if(count<=3){
            container1.innerHTML += `
      
            <div class="card border-0">
            <img src="${data[i].image}" class="card-img-top"
              alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">${data[i].summary}</p>
            <p>By: ${data[i].author}</p>
            </div>
          </div>
          `
          }
          count++;
      }
    }
    count=1;
    let container2 =document.querySelector(".card-container2");
    for(let i=0 ;i<data.length; i++) {
      if(data[i].age ==="7-12") {
          if(count<=3){
            container2.innerHTML += `
      
            <div class="card border-0">
            <img src="${data[i].image}" class="card-img-top"
              alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">${data[i].summary}</p>
            <p>By: ${data[i].author}</p>
            </div>
          </div>
          `
          }
          count++;
      }
    }
  })
  .then ((error) => {
    console.error("error",error);
    return error;
  })
}

dataHome();
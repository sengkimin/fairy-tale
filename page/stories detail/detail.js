// document.getElementById("single").innerHTML +=`

// <header class="d-flex justify-content-center py-3 border-bottom">
//   <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
//     <span class="fs-4">Fairy Tale</span>
//   </a>
//   <ul class="nav nav-pills">
//     <li class="nav-item"><a href="" class="nav-link " aria-current="page">Home</a></li>
//     <li class="nav-item"><a href="#" class="nav-link active">Stories</a></li>
//     <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
//   </ul>
// </header>

//    <div class="header">
//     <h1>The Shoe That Flew</h1>
//     <p>When  Ollie  does  a  GIANT  kick  one  sunny  day,  it's  not  just  the  ball  that  goes  flying!</p>
//    </div>
//    <div class="image">
//    <img src="h" alt="">
//    </div>
//     <div class="title">
//    <p>Enid Blyton's The Enchanted Wood is a delightful tale that sparks the imagination with its whimsical settings and colorful characters. It transports readers to a world of wonder and excitement, where every chapter brings new surprises and adventures. Enid Blyton's The Enchanted Wood is a delightful tale that sparks the imagination with its whimsical settings and colorful characters. </p>
//    <p>It transports readers to a world of wonder and excitement, where every chapter brings new surprises and adventures. Enid Blyton's The Enchanted Wood is a delightful tale that sparks the imagination with its whimsical settings and colorful characters. It transports readers to a world of wonder and excitement, where every chapter brings new surprises and adventures. </p>
//    <p>Enid Blyton's The Enchanted Wood is a delightful tale that sparks the imagination with its whimsical settings and colorful characters. It transports readers to a world of wonder and excitement, where every chapter brings new surprises and adventures.</p>
//    </div>
//    <div >
   
//    </div>

   
// `;

function fetchData() {
  fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => {
            const card = document.getElementById('single');
     for(let i=0; i<1; i++) {
      if(data[i].id) {
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
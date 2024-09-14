let Moon = document.getElementById("moon");

Moon.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("bg-BlandWhite");

  if (Moon.className == "fa-solid fa-moon") {
    Moon.className = "fa-solid fa-sun";
  } else {
    Moon.className = "fa-solid fa-moon";
  }
});

let SurgeryCard = document.querySelectorAll(".card1");

SurgeryCard.forEach(function (DocCards) {
  let div = document.createElement("div");
  div.classList.add("DocDetail");
  div.innerHTML = `
      <img src="${DocCards.firstElementChild.src}" alt="">
      <h2>${DocCards.lastElementChild.innerHTML}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, laboriosam?</p>
      `;
});


let Review = document.querySelectorAll(".patient-cards");
let count = 0;

Review.forEach(function(Val, Ind){
  Val.style.left=`${Ind * 100}%`;
})

function myfun(){
  Review.forEach(function(Img){
    Img.style.transform=`translateX(-${count * 100}%)`;
  })
}

setInterval(function(){
  count++;
  if(count == Review.length){
    count=0;
  }
  myfun();
},1000)



// let Moon = document.getElementById("moon");

// Moon.addEventListener("click", function () {
//   document.querySelector("body").classList.toggle("bg-BlandWhite");

//   if (Moon.className == "fa-solid fa-moon") {
//     Moon.className = "fa-solid fa-sun";
//   } else {
//     Moon.className = "fa-solid fa-moon";
//   }
// });

// // ------------------SURGERY DOCTORS----------------

// let SurgeryCard = document.querySelectorAll(".card1");

// SurgeryCard.forEach(function (Cards) {
//   Cards.addEventListener("click", function () {

//     let Tag = document.createElement("div");
//     Tag.classList.add("DocDetail");
//     Tag.innerHTML = `
//         <i id="cross" class="fa-solid fa-square-xmark"></i>
//         <img src="${Cards.firstElementChild.src}" alt="">
//         <h2>${Cards.lastElementChild.innerHTML}</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ea laudantium nihil eveniet! Possimus officiis pariatur illo hic! Eveniet, tenetur.</p>
//         `;

//         document.querySelector("body").appendChild(Tag);

//         document.getElementById("cross").addEventListener("click", function(){
//           Tag.remove();
//         })

//   });
// });

// // ----------------------DOCTORS-CARD-SLIDE-----------------

// let CardSlide = document.querySelectorAll(".patient-cards");
// let count = 0;

// CardSlide.forEach(function (Val, Ind) {
//   Val.style.left = `${Ind * 100}%`;
// });

// function myfun() {
//   CardSlide.forEach(function (Img) {
//     Img.style.transform = `translateX(-${count * 100}%)`;
//   });
// }

// setInterval(function () {
//   count++;
//   if (count == CardSlide.length) {
//     count = 0;
//   }
//   myfun();
// }, 2000);

let headerNav = document.querySelector(".header__nav");
let tabContent = document.querySelectorAll(".tabcontent");
let tab = document.querySelectorAll(".tab");


   //*   Funstion (main and section) => visible added and remove

function hideTabContent(a, b) {
   for (let i = a; i < b.length; i++) {
      b[i].classList.remove("show");
      b[i].classList.add("hide");
   }
}
hideTabContent(0, tabContent);

function showTabContent(z, y) {
   if(y[z].classList.contains('hide')){
      y[z].classList.remove("hide");
      y[z].classList.add("show");
   }
}

   //*   Funstion header => grow added and remove

function growOn(a, b) {
   for (let i = a; i < b.length; i++) {
      b[i].classList.remove("grow-on");
      b[i].classList.add("grow-off");
      b[i].classList.remove("bg-warning");
   }
}
growOn(0, tab);

function growOff(z, y) {
   if (y[z].classList.contains('grow-off')){
      y[z].classList.remove("grow-off");
      y[z].classList.add("grow-on");
      y[z].classList.add("bg-warning");
   }
}

   //?   On-click event

headerNav.addEventListener("click", (evn) => {
   let target = evn.target;
   
   for (let i = 0; i < tab.length; i++) {
      
      if (target == tab[i]) {
         growOn(0, tab);
         growOff(i, tab);

         hideTabContent(0, tabContent);
         showTabContent(i, tabContent);
         break;
      }
   }
})

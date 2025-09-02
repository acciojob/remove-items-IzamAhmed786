//your JS code here. If required.
let butn=document.querySelector('input[type="button"]');
// let set=document.getElementById("colorSelect");

butn.addEventListener("click",removeColor);

function removeColor() {
      const select = document.getElementById("colorSelect");
      
      if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
      }
    }
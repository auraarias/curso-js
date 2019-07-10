
let nav= document.querySelector("#header-nav");
let hideBtn = document.querySelector("#hide-button");

hideBtn.addEventListener("click", () => {
    if (nav.className === "open") {
        nav.className = "close";
    
    } else if(nav.className === "close"){
        nav.className = "open"
    }
});





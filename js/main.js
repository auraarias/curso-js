let nav = document.querySelector("#header-nav");
let hideBtn = document.querySelector("#hide-button");
let portfolioNav = document.querySelector("#nav-bar-portfolio");

hideBtn.addEventListener("click", () => {
    if (nav.className === "open") {
        nav.className = "close";
        portfolioNav.className = "open-portfolio-nav";

    } else if (nav.className === "close") {
        nav.className = "open";
        portfolioNav.className = "close-portfolio-nav"
    }
});

let gloot = document.querySelector("#gloot");
let jigui = document.querySelector("#jigui");
let banner = document.querySelector("#banner");
let rides = document.querySelector("#rides");
let betracks = document.querySelector("#betracks");
let coffee = document.querySelector("#coffee");

let preview = document.querySelector("#preview");

jigui.addEventListener("mouseover", () => {

    if (jigui.className != "selected") {
        preview.src = "images/jigui.png";
        preview.style.animation = "none";
        jigui.className = "selected";
        gloot.className = "";
        banner.className= "";
        rides.className="";
        betracks.className = "";
        coffee.className="";
        preview.offsetHeight;
        preview.style.animation = null;
        
    }
});

gloot.addEventListener("mouseover", () => {
    if (gloot.className != "selected") {
        preview.src = "images/gloot.png";
        preview.style.animation = "none";
        gloot.className = "selected";
        jigui.className = "";
        banner.className= "";
        rides.className="";
        betracks.className = "";
        coffee.className="";
        preview.offsetHeight;
        preview.style.animation = null;
    }
});

banner.addEventListener("mouseover", () => {
    if (banner.className != "selected") {
        preview.src = "images/banner.png";
        preview.style.animation = "none";
        gloot.className = "";
        jigui.className = "";
        banner.className= "selected";
        rides.className="";
        betracks.className = "";
        coffee.className="";
        preview.offsetHeight;
        preview.style.animation = null;
    }
});

rides.addEventListener("mouseover", () => {
    if (rides.className != "selected") {
        preview.src = "images/rides.png";
        preview.style.animation = "none";
        gloot.className = "";
        jigui.className = "";
        banner.className= "";
        rides.className="selected";
        betracks.className = "";
        coffee.className="";
        preview.offsetHeight;
        preview.style.animation = null;
    }
});

betracks.addEventListener("mouseover", () => {
    if (betracks.className != "selected") {
        preview.src = "images/betracks.png";
        preview.style.animation = "none";
        gloot.className = "";
        jigui.className = "";
        banner.className= "";
        rides.className="";
        betracks.className = "selected";
        coffee.className="";
        preview.offsetHeight;
        preview.style.animation = null;
    }
});

coffee.addEventListener("mouseover", () => {
    if (coffee.className != "selected") {
        preview.src = "images/coffee.png";
        preview.style.animation = "none";
        gloot.className = "";
        jigui.className = "";
        banner.className= "";
        rides.className="";
        betracks.className = "";
        coffee.className="selected";
        preview.offsetHeight;
        preview.style.animation = null;
    }
});

let homeBtn = document.querySelector("#prueba");
let aboutBtn = document.querySelector("#aboutBtn");
let portfolioBtn = document.querySelector("#portfolioBtn");
let contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", () =>{

    if(homeBtn.className != "selected-item"){
        homeBtn.className = "selected-item";
        aboutBtn.className = "";
        portfolioBtn.className = "";
        contactBtn.className= "";
    }
});

aboutBtn.addEventListener("click", () =>{

    if(aboutBtn.className != "selected-item"){
        homeBtn.className = "";
        aboutBtn.className = "selected-item";
        portfolioBtn.className = "";
        contactBtn.className= "";
    }
});

portfolioBtn.addEventListener("click", () =>{

    if(portfolioBtn.className != "selected-item"){
        homeBtn.className = "";
        aboutBtn.className = "";
        portfolioBtn.className = "selected-item";
        contactBtn.className= "";
    }
});

contactBtn.addEventListener("click", () =>{

    if(contactBtn.className != "selected-item"){
        homeBtn.className = "";
        aboutBtn.className = "";
        portfolioBtn.className = "";
        contactBtn.className= "selected-item";
    }
});
import './styles.css'
import u from './utility.js'

let setUpEvents = () => {
    let menu = document.getElementsByClassName("menu")[0];
    if(!menu || menu === null) {
        setTimeout(setUpEvents, 1000);
        console.log(menu);
    } else {
        let menuLinks = menu.children[menu.childElementCount - 1];
        menuLinks.addEventListener("mouseover", openDropDown)
        console.log(menuLinks);
    }
};

let openDropDown = () => {
    let menu = document.getElementsByClassName("menu")[0];
    let menuLinks = menu.children[menu.childElementCount - 1];
    let link = document.getElementById("links");

    if(menuLinks.className !== "dark") {
        menuLinks.className = "dark"
    }

    // let isHidden = Array.from(link.classList).indexOf("hidden");
    if(link.classList.contains("hidden")) {
        link.classList.remove("hidden")
    }
};

window.onload = function() {
    console.log("At onload function");
    // u.util("I was imported");

    setUpEvents();
}(u);

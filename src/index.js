import './styles.css'
import u from './utility.js'

//setup dynamic action events
let setUpEvents = () => {
    let menu = document.getElementsByClassName("menu")[0];
    if(!menu || menu === null) { //if menu hasn't loaded yet, wait before setting up events
        setTimeout(setUpEvents, 1000);
    } else {
        let menuLinks = menu.children[menu.childElementCount - 1];
        let links = document.getElementById("links");
        menuLinks.addEventListener("mouseover", openDropDown); //add hover action to link in menu
        links.addEventListener("mouseover", openDropDown); //keep drop-down open
        menuLinks.addEventListener("mouseout", closeDropDown);
        links.addEventListener("mouseout", closeDropDown);

        loadProjects();
    }
};

let openDropDown = () => {
    let menu = document.getElementsByClassName("menu")[0];
    let menuLinks = menu.children[menu.childElementCount - 1];
    let links = document.getElementById("links");

    menuLinks.className = "dark"; //change color while drop-down is open

    if(links.classList.contains("hidden")) {
        links.classList.remove("hidden")
    }
};

let closeDropDown = () => {
    let menu = document.getElementsByClassName("menu")[0];
    let menuLinks = menu.children[menu.childElementCount - 1];
    let links = document.getElementById("links");

    menuLinks.className = "";

    if(!links.classList.contains("hidden")) {
        links.classList.add("hidden");
    }
};

let loadProjects = () => {
    u.fetchProjects();

};

let createProject = (info) => {
    let projContainer = document.getElementById("project-list");

    let project = document.createElement("div");
    project.className = "project-widget";


    projContainer.appendChild(project);
};

window.onload = function() {
    console.log("At onload function");

    setUpEvents();
}(u);

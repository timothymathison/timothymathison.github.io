import u from './utility.js'

document.onload = () => {
    console.log("Hello from onload function")
    u.util("I was imported");
};

document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello from load event listener");
});

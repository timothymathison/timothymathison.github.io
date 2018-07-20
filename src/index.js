import u from './utility.js'

document.onload = function() {
    console.log("Hello from onload function");
    u.util("I was imported");
}

// document.addEventListener("DOMContentLoaded", function(){
//     console.log("Hello from load event listener");
// });

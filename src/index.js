import './styles.css'
import u from './utility.js'

window.onload = function() {
    console.log("Hello from onload function");
    u.util("I was imported");
}(u);

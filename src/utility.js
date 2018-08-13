// let util = (sayIt) => {
//     console.log("echo: " + sayIt);
// };
//
// module.exports = {util: util};

class Utility {
    static util(sayIt) {
        console.log("echo: " + sayIt);
    }

    static fetchProjects() {
        let req = new XMLHttpRequest();
        let url = `${window.location.origin}/data/projects.json`;

        req.onreadystatechange = () => {
            if(req.readyState === 4) {
                if(req.status === 200) {
                    console.log(req.responseText);
                } else {
                    console.error("Error retrieving project data")
                }
            }
        };

        req.open("GET", url, true);
        req.send();
    }
}

export default Utility
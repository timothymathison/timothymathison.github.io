
class Utility {

    static fetchProjects(handler) {
        let req = new XMLHttpRequest();
        let url = `${window.location.origin}/data/projects.json`;

        req.onreadystatechange = () => {
            if(req.readyState === 4) {
                if(req.status === 200) {
                    let projects = JSON.parse(req.responseText);
                    handler(projects);
                } else {
                    console.error("Error retrieving project data");
                }
            }
        };

        req.open("GET", url, true);
        req.send();
    }
}

export default Utility
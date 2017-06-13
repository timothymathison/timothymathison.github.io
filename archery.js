

var sendClick = function()
{
    console.log(event);
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() {
        if (httprequest.readyState == 4 && httprequest.status == 200)
            alert(httprequest.responseText);
    }
    httprequest.open("GET", "https://ta72cmbb94.execute-api.us-east-2.amazonaws.com/helloworld?name=Tim&title=Intern", true);
    httprequest.send(null)

}

document.body.onclick = sendClick();
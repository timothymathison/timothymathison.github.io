

var sendClick = function(event)
{
    console.log(event);
    var httprequest = new XMLHttpRequest();
    httprequest.withCredentials = true;
    httprequest.onreadystatechange = function() {
        if (httprequest.readyState == 4 && httprequest.status == 200)
            alert(httprequest.responseText);
    }
    httprequest.open("GET", "https://ta72cmbb94.execute-api.us-east-2.amazonaws.com/helloworld", true);
    httprequest.send(null)

}

document.addEventListener("DOMContentLoaded", function(){
    document.body.onclick = function(e)
    {
        sendClick(e);
    }
});

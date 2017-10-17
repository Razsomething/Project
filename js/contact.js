/**
 * Created by Razso on 17-Oct-17.
 */
function loadInfo() {
    var info = "js/info.json";
    var http_request = new XMLHttpRequest();
    http_request.onreadystatechange = function(){

        if (http_request.readyState == 4 && this.status == 200){

            var jsonObj = JSON.parse(http_request.responseText);

            document.getElementById("name").innerHTML = jsonObj.name;
            document.getElementById("phone").innerHTML = jsonObj.phone;
            document.getElementById("email").innerHTML = jsonObj.email;

        }
    };

    http_request.open("GET", info, true);
    http_request.send();
}
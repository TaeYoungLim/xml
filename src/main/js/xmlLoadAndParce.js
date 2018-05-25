function loadDoc() {

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if(this.status == 200 && this.readyState == this.DONE) {

            displayData(xmlHttp);

        }

    };

    xmlHttp.open("GET", "/examples/media/korean_major_cities.xml", true);

    xmlHttp.send();

}

 

function displayData(xmlHttp) {

    var xmlObj, cityList, result, idx;

    xmlObj = xmlHttp.responseXML; // 요청한 데이터를 XML DOM 객체로 반환함.

    result = "<table><tr><th>도시 이름</th><th>행정구역</th></tr>";

    cityList = xmlObj.getElementsByTagName("city");

    for(idx = 0; idx < cityList.length; idx++) {

        result += "<tr><td>" +

            cityList[idx].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +

            cityList[idx].getElementsByTagName("class")[0].childNodes[0].nodeValue + "</td></tr>";

    }

    result += "</table>";

    document.getElementById("text").innerHTML = result;

}
var xmlhttp = new XMLHttpRequest();
var url = 'http://localhost:3000/cardS';

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        thearray(myArr);
    } 
    return myArr;
    
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

let data = []
const thearray = (arr) => {
data = arr
return data}


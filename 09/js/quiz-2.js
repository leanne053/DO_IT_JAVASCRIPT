var r = document.querySelector("#radius");
var bttn = document.querySelector("#start");
var round = document.querySelector("#round");
var area = document.querySelector("#area");

bttn.addEventListener("click",result);

function result(){
    round.value = Number(r.value)*2*3.14;
    area.value = Number(r.value)*Number(r.value)*3.14;
}
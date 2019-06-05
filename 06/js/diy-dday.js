var today = new Date();
var firstday = new Date("2019-3-5");
var todayT = today.getTime();
var firstdayT = firstday.getTime();
var passedDay = todayT - firstdayT;

document.querySelector("#accent").innerText = Math.round(passedDay/(1000*60*60*24))+"일";

function calDate(days){
    var future = firstdayT +days*(1000*60*60*24);
    var someday =new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();
    
    document.querySelector("#date"+days).innerText = year +"년 "+month+"월 "+date+"일";
    
}
calDate(100);
calDate(200);
calDate(365);
calDate(500);
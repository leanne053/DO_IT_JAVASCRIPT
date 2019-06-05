var today = new Date();
var firstDay = new Date("2016-06-29");

var todayT = today.getTime();
var firstDayT = firstDay.getTime();
var passedTime = todayT - firstDayT;

var passedDay = Math.round(passedTime/(1000*60*60*24));

document.querySelector("#accent").innerText = passedDay +"일";

calDate(100);
calDate(200);
calDate(365);
calDate(500);

function calDate(days){
    var future = firstDayT +days*(1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();

    document.querySelector("#date"+days).innerText = year +"년 "+month +"월 "+date+"일 ";
}



// //100일 후 날짜
// var future100 = firstDayT +100*(1000*60*60*24);
// var someday100 = new Date(future100);

// var year = someday100.getFullYear();
// var month = someday100.getMonth();
// var date = someday100.getDate();

// document.querySelector("#date100").innerText = year +"년 "+month +"월 "+date+"일";
// //200일 후 날짜
// var future200 = firstDayT +200*(1000*60*60*24);
// var someday200 = new Date(future200);

// var year = someday200.getFullYear();
// var month = someday200.getMonth()+1;//month가 0부터 시작이므로 1을 더해줌.
// var date = someday200.getDate();

// document.querySelector("#date200").innerText = year +"년 "+month +"월 "+date+"일";
// //1년 후 날자
// var future365 = firstDayT +365*(1000*60*60*24);
// var someday365 = new Date(future365);

// var year = someday365.getFullYear();
// var month = someday365.getMonth();
// var date = someday365.getDate();

// document.querySelector("#date365").innerText = year +"년 "+month +"월 "+date+"일";


// //500일 후 날짜
// var future500 = firstDayT +500*(1000*60*60*24);
// var someday500 = new Date(future500);

// var year = someday500.getFullYear();
// var month = someday500.getMonth();
// var date = someday500.getDate();

// document.querySelector("#date500").innerText = year +"년 "+month +"월 "+date+"일";

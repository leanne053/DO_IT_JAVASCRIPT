var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");
var isOpen = false;

for(var i=0;i<smallPics.length;i++){
    smallPics[i].addEventListener("click",show);
}

function show(){
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
}

var view = document.querySelector("#view");
var detail = document.querySelector("#detail");
view.addEventListener("click", showDetail);

function showDetail(){
    if(isOpen == false){
        detail.style.display ="block";
        view.innerText = "상세 설명 닫기";
        isOpen = true;
    }else{
        detail.style.display ="none";
        view.innerText =  "상세 설명 보기";
        isOpen = false;
    }
}
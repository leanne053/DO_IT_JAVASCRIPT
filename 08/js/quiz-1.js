var newP = document.querySelector("#myText");
newP.addEventListener("click",changeText);

function changeText(){
    newP.style.fontcolor="blue";
    newP.style.fontsize="20px";
    newP.style.backgroundColor="#ccc";
}

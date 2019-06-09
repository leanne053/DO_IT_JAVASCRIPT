function addList(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class", "del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);


var list = document.querySelector("#nameList");
list.insertBefore(newP,list.childNodes[0]);
userName.value="";


var removeBttns = document.querySelectorAll(".del");
for(var i=0;i<removeBttns.length;i++){
    removeBttns[i].addEventListener("click", removeList);
function removeList(){
        if(this.parentNode.parentNode)
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}
}
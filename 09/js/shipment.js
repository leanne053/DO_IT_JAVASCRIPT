var nameInfo = document.querySelector("#billingName");
var tellInfo = document.querySelector("#billingTel");
var addInfo = document.querySelector("#billingAddr");
var check = document.querySelector("#shippingInfo");

check.addEventListener("click", checked);
function checked() {
    if(check.checked){
        document.querySelector("#shippingName").value = nameInfo.value;
        document.querySelector("#shippingTel").value = tellInfo.value;
        document.querySelector("#shippingAddr").value = addInfo.value;
    }else{
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
}

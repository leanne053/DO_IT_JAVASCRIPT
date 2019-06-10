var checkbx = document.querySelectorAll(".checkbx");
var sum = 24000;
var total = document.querySelector("#total");
total.value = sum+"원";

for(var i=0; i < checkbx.length; i++){
    checkbx[i].onclick= function(){
        if(this.checked==true){   
        sum += parseInt(this.value);
        }
        else {
            sum -= parseInt(this.value);
        }
        total.value = sum +"원";
    }
}


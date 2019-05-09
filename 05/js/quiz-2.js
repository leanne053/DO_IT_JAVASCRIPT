var a = parseInt(prompt("비교할 첫 번째 숫자:"));
var b = parseInt(prompt("비교할 두 번째 숫자:"));

compare(a,b);

function compare(a, b){
    if(a>b){
        alert(a+"(이)가 "+b+"보다 큽니다.");
    }else if(b>a){
        alert(b+"(이)가"+a+"보다 큽니다.");
    }else if(a==b){
        alert("두 숫자가 같습니다.");
    }else{
        alert("잘못 입력하셨습니다.");
    }
}
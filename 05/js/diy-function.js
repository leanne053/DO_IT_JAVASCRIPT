    var num1 = parseInt(prompt("첫번째 값을 입력하세요"));
    var num2 = parseInt(prompt("두번째 값을 입력하세요"));
    var result = add(num1, num2);
    document.write("두수의 합은 "+result);

    
    function add(a, b){
        var sum = a+b;
        return sum;
}
		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			var total =0;
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
				total+=arr[i];
			}
			str +="<td>"+total+"</td>";
			str += "</tr></table>";
			document.write(str);
		}
		// 다른 방법
		// var numbers = [2, 4, 6, 8, 10];
		// showArray(numbers);
		// var total =0;
		// for(var i=0;i<numbers.length;i++){
		// 		total +=numbers[i]; 
		// }
		//  numbers.push(total);
		//  showArray(numbers);

		// function showArray(arr) {
		// 	var str = "<table><tr>";
		// 	var total =0;
		// 	for (var i=0; i<arr.length; i++) {
		// 		str += "<td>" + arr[i] + "</td>";
		// 	}
		// 	str += "</tr></table>";
		// 	document.write(str);
		// }
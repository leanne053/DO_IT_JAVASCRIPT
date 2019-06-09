		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  
		var isOpen = false;

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view = document.querySelector("#view");
		view.addEventListener("click", show);

		function show(){
			var detail = document.querySelector("#detail");

			if(isOpen == false){
				detail.style.display = "block";
				view.innerText ="상세 설명 닫기";
				isOpen = true;
			}
			else{
				detail.style.display ="none";
				view.innerText="상세 설명 보기";
				isOpen = false;
			}
		}
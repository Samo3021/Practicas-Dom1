let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	let newList = document.createElement("LI");
	newList.innerHTML = "Fourth element";
	list.appendChild(newList);
});

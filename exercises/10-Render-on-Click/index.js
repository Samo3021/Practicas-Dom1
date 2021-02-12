let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let node = document.createElement("DIV");
	node.innerHTML = "Hello World";
	node.style.background = "yellow";
	document.body.appendChild(node);
});

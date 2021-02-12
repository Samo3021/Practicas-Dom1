window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let selection = document.querySelector(" #mySelect");
	selection.addEventListener("change", function(e) {
		alert(e.target.value);
	});

	for (let i = 0; i < countries.length; i++) {
		let newOption = document.createElement("OPTION");
		newOption.value = countries[i];
		newOption.innerHTML = countries[i];
		selection.appendChild(newOption);
		console.log(newOption);
	}
};

console.log("hello")

let header1 = document.createElement('h1');
header1.textContent = 'Hello World';
document.body.append(header1);

header1.addEventListener('dblclick', function() {
	alert("I was double-clicked!");
});
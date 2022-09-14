let h1 = document.getElementById("fs_h1");
h1.innerHTML = "Click Me";
h1.onclick = function () {
	h1.textContent = "hello i am aman";
	h1.style.backgroundColor = "White";
};

setInterval(function () {
	let mydate = new Date();
	clock.innerHTML =
		"<br>" + mydate.toLocaleTimeString() + " on date " + mydate.toDateString();
}, 1000);

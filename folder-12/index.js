header_1 = document.body.children[0];
console.log(header_1);
header_1;
console.dir(document.body);

header_1 = document.getElementById("header_1");

para_2 = document.querySelector(".para_2");
para_2.innerText = "This is aman bhargava";
para_2.style.background = "aqua";
para = document.createElement("p");
para_3 = document.body.appendChild(para);
para_3.innerText = "this is para 3";
para_3.setAttribute("id", "para_3");
para_3.remove();
console.log(document.body.innerHTML);
// document.body.innerHTML = "this is a <strong>important</strong>";
btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
// 	btn.innerText = "Hello";
// });

function change_text() {
	btn.innerText = "Hello there";
}

btn.addEventListener("click", change_text);

// new demo project
const max_char = 60;
input = document.getElementById("input");

remaining_number = document.getElementById("remaining_number");

function input_char() {
	let len = input.value.length;

	remaining_number.innerText = 60 - len;
	if (len >= 50) {
		input.style.backgroundColor = "rgb(254, 127, 127)";
	} else {
		input.style.backgroundColor = "white";
	}
	console.log(len);
}

input.addEventListener("input", input_char);

para_1=document.body.children[1];
console.log(para_1);
console.dir(para_1);
para_1.id="para_1";
para_1.className="para_1";
para_1.className="warning";

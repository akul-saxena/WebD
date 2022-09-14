// sum till a number
function sum_num() {
	const num = document.getElementById("input_num").value;
	console.log(num);
	for (var i = 0, sum = 0; i < num; i++) {
		sum = sum + i;
	}
	const output_sum = document.getElementById("output_sum");
	output_sum.innerText = sum;
}

// highlighting links
para_1 = document.getElementById("para_1");
para_2 = document.getElementById("para_2");
para_3 = document.getElementById("para_3");
a1 = para_1.querySelector("a");
a2 = para_2.querySelector("a");
a3 = para_3.querySelector("a");
btn = document.getElementById("btn_highlights");
const arr = [a1, a2, a3];
for (const i of arr) {
	i.style.color = "rgb(6, 156, 24)";
	i.style.textDecoration = "none";
}

function highlight() {
	const arr = [a1, a2, a3];
	for (const i of arr) {
		i.style.backgroundColor = "lightblue";
	}
}
btn.addEventListener("click", highlight);

// for ... in
const ob = {
	fname: "aman",
	lname: "bhargava",
	semester: 4,
	section: "A",
};

const info = document.getElementById("info");
for (const i in ob) {
	const element = ob[i];
}

// random number on dice
function random_number() {
	const num = document.getElementById("input_ran_num").value;
	output_para = document.getElementById("output_para");
	output_para.innerText = " ";
	const hr = document.createElement("hr");
	var flag = 0,
		i = 0;
	while (flag != num) {
		let result = "para".concat(i);
		result = document.createElement("p");
		flag = Math.floor(Math.random() * 6) + 1;
		output_para.appendChild(result);
		result.innerText = "Chance " + (i + 1) + " : " + flag;
		i++;
	}
	output_para.appendChild(hr);
	num_rolls = document.getElementById("num_rolls");
	num_value = document.getElementById("num");
	num_rolls.innerText = i;
	num_value.innerText = num;
}

const btn_roll = document.getElementById("btn_roll_dice");
btn_roll.addEventListener("click", random_number);

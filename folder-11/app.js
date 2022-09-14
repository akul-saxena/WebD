// let age = 32;
// let nam = "Aman Bhargava";
// let array = ["aman", 32, "a"];
// console.log(age);
// console.log(nam);
// console.log(array);
// document.write(age, "\n");
// document.write(nam, "<br>");
// document.write(array, "<br>");

// let person = {
// 	nam,
// 	age,
// };

// person.age = 23;
// person.nam = "Akshi jain";

// document.write(person.age);

// document.write(person.nam);

// let addi = "aman " + "bhargava";
// document.write("<br>", addi);
// document.write("<br>", 23 + person.age);

// let btn = document.getElementById("btn");
// var names;

// person.nam = btn.addEventListener("click", function input() {
// 	names = prompt("Enter your name :");
// 	return names;
// });

// document.write("<br>", person.nam);

let course_name = "web-dev";
let course_price = "499";
let main_goals = [
	"i have to practise daily",
	"i will work hard",
	"i will learn",
];

console.log(course_name);
console.log(course_price);
console.log(main_goals);

let group = course_name + course_price + main_goals;
console.log(group);
console.log(main_goals[1]);
let identifer = prompt("Enter the index:");
print(identifer, main_goals);
function print(index, arr) {
	console.log(arr[index - 1]);
}

let ob = {
	clg: "skit", //property
	greet() {
		//method
		console.log("hello");
	},
};
ob.greet();
console.log(10 % 6);
let username = "max";
console.log(username.length);
let new_string = username.concat(" is here");
console.log(new_string);
switch (identifer) {
	case 1:
		console.log(identifer);
		break;
	case 2:
		console.log(identifer);
		break;
	case 3:
		console.log(identifer);
		break;
	default:
		break;
}

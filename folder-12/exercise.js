para_rm = document.getElementById("para_remove");
btn_rm = document.getElementById("btn_remove");
function remove_para() {
	para_rm.remove();
}
btn_rm.addEventListener("click", remove_para);
para_blue = document.getElementById("para_1");
btn_blue = document.getElementById("btn_background_blue");
function para_blue_background() {
	para_blue.style.backgroundColor = "rgba(0,0,255,0.6)";
}
btn_blue.addEventListener("click", para_blue_background);

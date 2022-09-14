function open_player_config( event ) {
	// string to integer
	edited_player = +event.target.dataset.playerid;

	// showing the backdrop and form
	config_overlay.style.display = "block";
	backdrop.style.display = "block";
}

function close_config_btn() {
	// closing the backdrop and form
	config_overlay.style.display = "none";
	backdrop.style.display = "none";

	// setting the input field empty before closing
	player_name.value = "";
}

function save_palyer_config( event ) {
	event.preventDefault();
	const formdata = new FormData( event.target );
	const player_name = formdata.get( "name" ).trim();

	if ( !player_name ) {
		// empty player name   empty string is a flase in javascriopt
		alert( "Please enter a valid name" );
	}

	// chanigng the name of player
	const player_para = document.getElementById( "name_para_" + edited_player );
	player_para.textContent = player_name;

	// storing player names
	players[ edited_player - 1 ].name = player_name;

	// closing the form
	close_config_btn();
}

// stores the sta list item to identify the edit btn which is clicked
let edited_player = 0;

// players names
const players = [
	{
		name: "",
		symbol: "X",
	},
	{
		name: "",
		symbol: "O",
	},
];

// config.js variables
const player_1_name_btn = document.getElementById( "player_1_name_btn" );
const player_2_name_btn = document.getElementById( "player_2_name_btn" );
const config_overlay = document.getElementById( "config_overlay" );
const backdrop = document.getElementById( "backdrop" );
const cancel_btn = document.getElementById( "cancel_btn" );

// form
const form = document.querySelector( "form" );
const player_name = document.getElementById( "player_name" );

// to show the backdrop and form
player_1_name_btn.addEventListener( "click", open_player_config );
player_2_name_btn.addEventListener( "click", open_player_config );

// to close the backdrop and form
cancel_btn.addEventListener( "click", close_config_btn );
backdrop.addEventListener( "click", close_config_btn );

// to submit the form
form.addEventListener( "submit", save_palyer_config );

// game.js variables
const start_game_btn = document.getElementById( "btn_start_game" );
const active_game = document.getElementById( "active_game" );

// to show game area
start_game_btn.addEventListener( "click", start_game );

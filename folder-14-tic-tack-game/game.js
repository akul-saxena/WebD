// to show the game area the game
function start_game() {
	if ( players[ 0 ].name === "" || players[ 1 ].name === "" ) {
		alert( "Please enter the names of players" );
		return;
	}
	active_game.style.display = "block";
}

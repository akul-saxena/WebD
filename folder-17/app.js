const http = require( "http" );
const dt = require( "./firstmodule" );
function handleRequest( request, response ) {
	if ( request.url === "/currenttime" ) {
		response.end( dt.mydatetime() );
	} else if ( request.url === "/Aman" ) {
		response.end( "Hello Aman" );
	} else if ( request.url === "/Ashu" ) {
		response.end( "Hello Ashu" );
	} else if ( request.url === "/Akhil" ) {
		response.end( "Hello Akhil" );
	} else {
		response.end( request.url );
	}
}

const server = http.createServer( handleRequest );

server.listen( 3000 );



// express
const express = require( "express" );

// for accessing data.json
const fs = require( 'fs' );
const path = require( 'path' );

// creating server named app
const app = express();

// moment
var moment = require( "moment" );

app.get( "/currenttime", function ( req, res ) {
    res.send( moment().format( "LTS" ) );
} );

app.use( express.urlencoded( { extended: false } ) );

app.get( "/", function ( req, res ) {
    res.send(
        '<form action="/store_user" method="POST"><label for="username">Username</label> : <input type="text" placeholder="Enter your username" name="username" id="username"></br><button type="submit">Submit</button></form>'
    );
} );

app.post( "/store_user", function ( req, res ) {

    const username = req.body.username;

    const filepath = path.join( __dirname, 'data.json' );

    fileData = JSON.parse( fs.readFileSync( filepath ) );
    fileData.push( { name: username } );
    fs.writeFileSync( filepath, JSON.stringify( fileData ) );

    res.send( "<h1>Username Stored</h1>" );
} );

app.listen( 3000 );

// require variables
const express = require( 'express' );
const path = require( 'path' );
const fs = require( 'fs' );

// path variables
const views_path = path.join( __dirname, 'views' )
const data_path = path.join( __dirname, 'data' );

// creating server
const app = express();


app.set( 'view engine', 'ejs' );
app.set( 'views', views_path );

app.use( express.static( 'public' ) );
app.use( express.urlencoded( { extended: false } ) );

// get responses
app.get( '/restaurants', function ( req, res ) {
    const fileData = JSON.parse( fs.readFileSync( data_path + "/restaurants.json" ) );

    // sending the data to restaurants.ejs using ejs
    res.render( 'restaurants', { number_of_restaurants: fileData.length, restaurants: fileData } );
} );

app.get( '/index', function ( req, res ) {
    res.render( 'index' );
} );

app.get( '/recommend', function ( req, res ) {
    res.render( 'recommend' );
} );

app.get( '/confirm', function ( req, res ) {
    res.render( 'confirm' );
} );

app.get( '/about', function ( req, res ) {
    res.render( 'about' );
} );

// post responses
app.post( '/recommend', function ( req, res ) {
    const restaurant = req.body;

    const fileData = JSON.parse( fs.readFileSync( data_path + "/restaurants.json" ) );
    fileData.push( restaurant );
    fs.writeFileSync( data_path + "/restaurants.json", JSON.stringify( fileData ) );

    res.redirect( '/confirm' );
} )

app.listen( 3000 );
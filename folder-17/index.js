var result = "";
fetch( "data.json" )
    .then( fileData => fileData.json() )
    .then( ( fileData ) => {
        fileData.forEach( element => {
            result = result + "<li>" + element.name + "</li>";
        } );
        document.getElementById( "list" ).innerHTML = result;
    } )






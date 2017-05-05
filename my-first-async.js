const fs = require( 'fs' );

fs.readFile( process.argv[ 2 ], 'utf8', function( err, data ) {
    if ( err ) {
        throw err;
    }
    const arr = data.toString().split( '\n' ); //split by new lines
    console.log( arr.length - 1 );
} );
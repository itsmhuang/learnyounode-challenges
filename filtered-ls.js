const fs = require( 'fs' ),
    path = require( 'path' ),
    fileType = '.' + process.argv[3];

fs.readdir( process.argv[2], function( err, files ) {
    if ( err ) {
        throw err;
    }
    
    files.forEach( ( i ) => {
        if( path.extname( i ) === fileType ) {
            console.log( i );
        }
    } );
    
} );

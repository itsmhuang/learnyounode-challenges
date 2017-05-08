const http = require( 'http' ),
    bl = require( 'bl' );

http.get(process.argv[2], ( res ) => {
    res.setEncoding('utf8');
    res.pipe(bl( (err, data) => {
        if ( err ) {
            throw err;
        }
        console.log( data.length );
        console.log( data.toString() );
    }));
});
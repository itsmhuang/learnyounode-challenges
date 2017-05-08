const http = require( 'http' ),
    bl = require( 'bl' ),
    urls = process.argv.slice(2);

let completedRequests = 0,
    urlData = [];

for ( let i = 0; i < urls.length; i++ ) {
    http.get(urls[i], ( res ) => {
        res.setEncoding( 'utf8' );
        res.pipe(bl( ( err, data ) => {
            if ( err ) {
                throw err;
            }
            urlData[i] = data.toString();
            completedRequests++;

            if ( completedRequests === 3) {
                urlData.forEach( (e) => {
                    console.log( e );
                } );
            }
        }));
    });
    
}
const tMap = require( 'through2-map' ), //array.map for streams
    http = require( 'http' ),
    portNum = process.argv[2];

let server = http.createServer( (req, res ) => {
    if ( req.method === 'POST' ) {
        ( req ).pipe( tMap( ( chunk ) => {
            return chunk.toString().toUpperCase();
        })).pipe( res );
    } else {
        return res.end( 'send me a post!' );
    }
    
});

server.listen(portNum);





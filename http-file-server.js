//You will need to use the fs.createReadStream() method to create a stream representing the file you are given as a command-line argument.
// The method returns a stream object which you can use src.pipe(dst) to pipe the data from the src stream to the dst stream.
// In this way you can connect a filesystem stream with an HTTP response stream.


const fs = require( 'fs' ),
    http = require( 'http' ),
    portNum = process.argv[2],
    file = process.argv[3];

let server = http.createServer( (req, res ) => {
    let readStream = fs.createReadStream( file );
    
    readStream.on( 'open', () => {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe( res );
    });
    
    readStream.on( 'error', ( err ) => {
        res.end( err );
    });
    
    
});

server.listen(portNum);

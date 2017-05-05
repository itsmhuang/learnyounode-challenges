const fs = require( 'fs' ),
    buf = fs.readFileSync( process.argv[ 2 ] ),
    arr = buf.toString().split( '\n' ); //split by new lines

console.log( arr.length - 1 ); //last line does not end with new line, so subtract 1
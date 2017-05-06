const myModule = require('./module-make-it-modular.js');

myModule(process.argv[2], process.argv[3], function( err, files ) {
    if ( err ) {
        throw err;
    }
    
    //log each array item
    files.forEach( ( i ) => {
        console.log(i);
    } );
    
});


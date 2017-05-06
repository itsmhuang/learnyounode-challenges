const fs = require( 'fs' );
path = require( 'path' );

//module exports single function that takes 3 args: dir name, filename ext, callback

module.exports = function( dir, fileType, callback ) {
    fs.readdir(dir, function (err, data) {
        if (err) {
            return callback(err); // early return
        }
        
        data = data.filter(function( i ) {
            return  path.extname( i ) === '.' + fileType;
        });
        
        callback(null, data);
    })
}
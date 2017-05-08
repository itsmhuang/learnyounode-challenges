const net = require( 'net' ),
    portNum = process.argv[2];

let server =    net.createServer( ( socket ) => {
    //  write data and then close the socket
    
    let zeroFill = ( input ) => {
        return input < 10 ? '0'+input : input;
    },
        rightNow = new Date(),
        year = zeroFill(rightNow.getFullYear()),
        month = zeroFill(rightNow.getMonth()+1), //because it starts at 0
        date = zeroFill(rightNow.getDate()),
        hour = zeroFill(rightNow.getHours()),
        min = zeroFill(rightNow.getMinutes());
    
    rightNow = year +'-'+ month +'-'+ date +' '+ hour +':'+ min;
    
    
    socket.write( rightNow );
    socket.end( '\n' );
});


server.listen(portNum);
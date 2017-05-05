var inputs = process.argv.slice( 2 ).map( ( i ) => { return Number( i ); } );
console.log( inputs.reduce( ( prev, curr ) => { return prev + curr; } ) );
const express = require( 'express' );
const {PersonRouter} = require( './server/config/router' );
require( './server/config/mongoose' );
const app = express();
app.use(express.json());
app.use( '/', PersonRouter );

app.listen( 8888, function(){
    console.log( "The server is running in port 8888." );
});
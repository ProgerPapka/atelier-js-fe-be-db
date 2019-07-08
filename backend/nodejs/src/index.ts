import express from 'express';
const app = express();
const port = 8080;

app.get( '/', ( req, res ) => {
    res.send( 'Hello world!' );
} );

app.get( '/test', ( req, res ) => {
    res.send( 'Test http-get' );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

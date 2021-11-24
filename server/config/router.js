const express = require( 'express' );
const PersonRouter = express.Router();
const {PersonController} = require( './../controllers/people' );

PersonRouter
    .route( '/' )
    .get( PersonController.getAll)

PersonRouter
    .get( '/new/:name/', PersonController.createPerson );

PersonRouter
    .get( '/new/', PersonController.createPerson );

PersonRouter
    .get( '/remove/:name/',  PersonController.removePerson );

PersonRouter
    .get( '/:name', PersonController.getPerson );


module.exports = { PersonRouter };
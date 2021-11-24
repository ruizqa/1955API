const mongoose = require( 'mongoose' );
const PersonSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }  
}, {timestamps: true});

const Person = mongoose.model( 'Person', PersonSchema );

const PersonModel = {
    createPerson : function( newPerson ){
        return Person.create( newPerson );
    },
    getPeople : function(){
        return Person.find();
    },
    getPerson : function( name ){
        return Person.findOne(name);
    },
    remove: function(name){
        return Person.remove(name, {single:true});
    }
};

module.exports = {PersonModel};
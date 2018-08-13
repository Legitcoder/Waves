require('dotenv').config();
const mongoose = require('mongoose');
const Artist = require('./models/artist');
const Album = require('./models/album');
const Song = require('./models/song');
 mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017/admin`, { useNewUrlParser: true });

 mongoose.connection.on('connected', () => {    
    console.log('Mongoose is connected'); 
 });

 mongoose.connection.on('error', (err) => {    
    console.log(`mongoose connection err: `, err); 
  });


 const dropCollections = () => {
    mongoose.connection.collections['artists'].drop( function(err) {
        console.log('artists dropped');
      });
      
    mongoose.connection.collections['albums'].drop( function(err) {
        console.log('albums dropped');
    });
    
    mongoose.connection.collections['songs'].drop( function(err) {
        console.log('songs dropped');
    });
}
 
dropCollections();

let artists = [
    new Artist({
        name: 'Lloyd Banks'
    }),
    new Artist({
        name: 'Joe Budden'
    }),
    new Artist({
        name: 'Slaughterhouse'
    })
]


let albums = [
    new Album({
        title: 'Cold Corner 2'
    })
]

let songs = [
    new Song({
        title: 'Pulse'
    })
]

let objects = [...artists, ...albums, ...songs];

console.log(objects);

setTimeout(() => save(objects), 200);



//Es5 used because function needs to hoisted
function save(objects) {
    let done = 0;
    objects.forEach(object => {
        //console.log(object);
        object.save(() => {
            done++;
            console.log("object saved");
            if(done === objects.length) mongoose.disconnect();
        });
    });
}
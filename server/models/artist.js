const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String, 
        require: true
    },
    imagePath: {
        type: String,
        required: true,
    },
    albums: [{
        type: Schema.Types.ObjectId, 
        ref: 'Album'
    }],
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
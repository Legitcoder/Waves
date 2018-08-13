const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = Schema({
    title: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        //required
    },
    artist: {
        type: Schema.Types.ObjectId, 
        ref: 'Artist'
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
})

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;

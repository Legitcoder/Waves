const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = Schema({
    title: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        //required: true
    },
    audioPath: {
        type: String,
        //required: true
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
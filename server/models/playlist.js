const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: 'untitled'
    }, 
    songs: [{
      type: Schema.Types.ObjectId,
      ref: 'Song'  
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'  
    }
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = Playlist;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sbzchannel")
    .then(() => console.log("Connection established successfully..."))
    .catch((err) => console.log(err));

const playlistSchema = mongoose.Schema({
    name: String,
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

const Playlist = mongoose.model("Playlist", playlistSchema);

const deleteDocument = async (_id) => {
    try {
        // const result = await Playlist.deleteOne({_id}); // no any extra details found when deleted

        const result = await Playlist.findByIdAndDelete({_id}); // here it showed that entry to confirm which we are goes to delete

        console.log(result);
    } catch (err) {
        console.log("Error: ", err);
    }
}

deleteDocument("677d63654f6139ea37022de0");
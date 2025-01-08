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

const getDocument = async () => {
    // const result = await Playlist.find({$or: [{ctype: "Database"}, {author: "Sbz Technical"}] }); 
    const result  = await Playlist.find({$and: [{ctype: "Front End"}, {author: "Sbz Technical"}]});

    console.log(result);
}

getDocument();
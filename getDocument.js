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
    try {
        const result  = await Playlist.find();

        // const result = await Playlist.find({ctype: "Back End"})

        // const result = await Playlist.
        // find({ctype: "Back End"}).
        // select({name: 1});

        // const result = await Playlist.
        // find({ctype: "Front End"}).
        // select({_id: 0, name: 1});

        // const result = await Playlist.
        // find({ctype: "Back End"}).
        // select({_id: 0, name: 1}).
        // limit(2);

        // const result = await Playlist.
        // find({ctype: "Back End"}).
        // select({_id: 0, name: 1}).
        // limit(2).
        // skip(1);

        console.log(result);
    } 
    catch(err) {console.log("Error: ",err)}
}

getDocument();
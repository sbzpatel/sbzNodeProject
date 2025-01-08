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
    // const result = await Playlist.find({videos: {$gt : 50}});
    
    // const result = await Playlist.find({videos: {$gte : 84}});

    // const result = await Playlist.find({videos: {$lt : 42}});

    // const result = await Playlist.find({videos: {$lte : 42}});

    // const result = await Playlist.find({ctype: "Front End"}).select({name: 1})

    // const result = await Playlist.find({ctype: {$in: ["Front End"]}}).select({name: 1})

    // const result = await Playlist.find({ctype: {$in: ["Front End", "Back End"]}}).select({name: 1})

    const result = await Playlist.find({ctype: {$nin: ["Front End", "Back End"]}}).select({name: 1}) // mongoose will select here apart from any Front End or Back End 

    console.log(result);
}

getDocument();
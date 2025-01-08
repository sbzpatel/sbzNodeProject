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
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ countDocuments() $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

        // const result = await Playlist.find().countDocuments();

        // const result  = await Playlist
        // .find({$and: [{ctype: "Front End"}, {author: "Sbz Technical"}]})
        // .select({name: 1})
        // .countDocuments();

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ countDocuments() $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ sort() $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ //

        /*const result = await Playlist   // Ascending Order 
        .find()
        .select({name: 1})
        .sort({name: 1}); */

        const result = await Playlist   // Descending Order 
        .find()
        .select({name: 1})
        .sort({name: -1});

    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ sort() $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ // 

    console.log(result);
}

getDocument();
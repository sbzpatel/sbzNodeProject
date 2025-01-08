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

const updateDocument = async (_id) => {
    try {
        // const result = await Playlist.updateOne({ _id }, { $set: { name: "Mongo DBs" } }); // not showing any data here for confirmation to user with data in return

        // const result = await Playlist.findByIdAndUpdate({_id}, {$set: { name: "Mongo DB Tech" }}); // in o/p console, showing old data

        const result = await Playlist.findByIdAndUpdate({_id}, {$set: { name: "Mongo DB" }}, {new: true}); // in o/p console, showing updated data

        console.log(result);
    } catch (err) {
        console.log("Error: ", err);
    }
}

updateDocument("677d673137d8460d24b06a6b");
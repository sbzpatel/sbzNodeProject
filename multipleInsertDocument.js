const mongoose = require("mongoose");

// connection establish with new database "sbzchannel"
mongoose.connect("mongodb://localhost:27017/sbzchannel")
.then(() => console.log("Connection established successfully..."))
.catch((err) => console.log(err));


// Mongoose schema defines the structure of the document, default values & validators etc.

// Below is a sample Schema of Collection to enter the document according to given schema validators
const playlistSchema = new mongoose.Schema({
    name: String,
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// A Mongoose Model is a wrapper on the Mongoose schema.
// A Mongoose Schoose defines a structure of the document, default values, validators etc, 
// where Mongoose Model provides the interface to that database for creating , querying, updating & deleting fields

const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
    try {
        const mongoPlaylist = new Playlist({
            name: "mongo DB",
            ctype: "Back End",
            videos: 12,
            author: "Sbz Technical",
            active: true
        });

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Database",
            videos: 4,
            author: "Sbz Technical",
            active: true
        });

        const rnPlaylist = new Playlist({
            name: "React Native",
            ctype: "Front End",
            videos: 84,
            author: "Sbz Technical",
            active: true
        });

        const phpPlaylist = new Playlist({
            name: "PHP",
            ctype: "Back End",
            videos: 114,
            author: "Sbz Technical",
            active: true
        });
        
        const result = await Playlist.insertMany([mongoPlaylist, mongoosePlaylist, rnPlaylist, phpPlaylist]);
        console.log(result);
    } catch(e) {
        console.log("Error: "+e);
    }
}

createDocument();


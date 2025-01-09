const mongoose = require("mongoose");

// connection establish with new database "sbzchannel"
mongoose.connect("mongodb://localhost:27017/sbzchannel")
.then(() => console.log("Connection established successfully..."))
.catch((err) => console.log(err));


// Mongoose schema defines the structure of the document, default values & validators etc.

// Below is a sample Schema of Collection to enter the document according to given schema validators
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,    // require is optional, but index property mandate to delcare unique field
        required: true,
        // uppercase: true,
        // lowercase: true,
        trim: true,
        minLength: [2, "Required length is 2 or greater."],
        maxLength: [30, "Required length does not exceed 30."]
    },
    ctype: {
        type: String,
        enum: ["Front End", "Back End", "Database"]
    },
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
        const createPlaylist = new Playlist({
            name: "MySql",
            ctype: "Database",
            videos: 2,
            author: "Sbz Technical",
            active: true
        });
        
        const result = await createPlaylist.save();
        console.log(result);
    } catch(e) {
        console.log("Error: "+e);
    }
}

createDocument();
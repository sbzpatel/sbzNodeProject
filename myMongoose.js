const mongoose = require("mongoose");

// connection establish with new database "sbzchannel"
mongoose.connect("mongodb://localhost:27017/sbzchannel").then(() => console.log("Connection successfully established...."))
.catch((err) => console.log(err));
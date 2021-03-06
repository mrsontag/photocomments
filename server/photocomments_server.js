const express = require("express");
const app = express();
const cors = require('cors');

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

app.use(express.json(), express.urlencoded({ extended: true }));


// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/server.routes");
AllMyUserRoutes(app);

app.listen(8002, () => console.log("The server is all fired up on port 8002"));

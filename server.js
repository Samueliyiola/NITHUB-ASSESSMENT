const app = require("./app.js");
const http = require("http");
const server = http.createServer(app);
const connectDB = require("./config/database.js");
const dotenv = require("dotenv");
dotenv.config();

connectDB();













const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    try{
 
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});
const app = require("./app.js");
const http = require("http");
const server = http.createServer(app);
const connectDB = require("./config/database.js");
const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
    try{
        connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
});
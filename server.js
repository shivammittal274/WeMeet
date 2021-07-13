require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const server = http.createServer(app);
const Routes = require("./app/routes");

app.use([
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({
        extended: false
    }),
    Routes,
]);

const DB = "mongodb+srv://shivam274:9410@we-meet.rfcww.mongodb.net/We-Meet?retryWrites=true&w=majority";
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const io = (module.exports.io = require("socket.io")(server, {
    cors: {
        origin: "/" || "https://wemeetgrouptalk.herokuapp.com/" || "http://localhost:3000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    },
    allowEIO3: true
}));
const socketManager = require("./app/config/socketManager");
io.on("connection", socketManager);


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    
    const path=require('path');
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
import express from "express";
import https from "https";
import { Server as SocketIoServer } from "socket.io";
import fs from "fs";

const app = express();

const server = https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/radbios.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/radbios.com/cert.pem'),
}, app);


const io = new SocketIoServer(server, {
    cors: {origin: "*"}
});

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', message);
    });

    socket.on('disconnect', (socket) => {
        console.log('disconnect');
    });
});

server.listen(3000, () => {
    console.log('server is running');
});

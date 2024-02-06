import express from "express";
import http from "http";
import { Server as SocketIoServer } from "socket.io";


const app = express();

const server = http.createServer(app);


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

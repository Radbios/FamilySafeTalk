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
        socket.on("user-connect", (user) => {
                console.log("user " + user + " conectado");
                socket.join(user);
        });
    socket.on('message', (data) => {
        data.users.forEach( (element) => {
                console.log("mensagem enviada para o usuario "+ element.id);
                io.to(element.id).emit('message', data);
        })
    });

    socket.on('disconnect', (socket) => {
        console.log('disconnect');
    });
});

server.listen(3000, () => {
    console.log('server is running');
});

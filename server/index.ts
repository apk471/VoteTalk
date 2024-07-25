import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    }
});

io.on("connection", async (socket) => {
    const { id } = socket;

    socket.on("join-room", async (room : string) => {
        console.log(`Socket ${id} joined room ${room}`);
    });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
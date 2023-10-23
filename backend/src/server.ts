import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

app.use(cors);
const port = env.PORT;

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});

mongoose
  .connect(env.MONGO_STRING)
  .then(() => {
    console.log("Mongoose connected");

    io.on("connection", (socket) => {
        console.log(socket.id);
    })

    server.listen(port)
  })
  .catch(console.error);

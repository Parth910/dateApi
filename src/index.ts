import express from 'express';
import router from 'router';
import { dbConnect } from './database';
import bodyParser from 'body-parser';
import socketIo from 'socket.io';
import http from 'http';
import * as path from "path";




import { addUser } from './function/activeUsers';
import { imgRouter } from './routes/img';
import { likeRouter } from './routes/like';
import { blockRouter } from './routes/block';
import { feedRouter } from './routes/feed';
import { signUpRouter } from './routes/signup';
import { logInRouter } from './routes/login';
import { getConnection } from 'typeorm';
import { User } from './entities/User';


const app = express();
const server = http.createServer(app);
export const io = socketIo(server);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dbConnect();





app.use('/img', imgRouter);
app.use('/like', likeRouter);
app.use('/block', blockRouter);
app.use('/feed', feedRouter);
app.use('/signup', signUpRouter);
app.use('/login', logInRouter);


app.get('/u1', (req, res) => {
    res.sendFile(path.resolve("./index.html"));
   
})
app.get('/u2', (req, res) => {
    res.sendFile(path.resolve("./u2.html"));
   
})

app.get('/', async (req, res) => {
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
            { email: "1@t.c", password: "123", imgPath: "uploads/1.jpeg", imgId: "1" },
            { email: "22@t.c", password: "123", imgPath: "uploads/2.jpeg", imgId: "2" },
            { email: "3@t.c", password: "123", imgPath: "uploads/3.jpeg", imgId: "3" },
            { email: "4@t.c", password: "123", imgPath: "uploads/4.jpeg", imgId: "4" },
            { email: "15@t.c", password: "123", imgPath: "uploads/5.jpeg", imgId: "5" },
            { email: "16@t.c", password: "123", imgPath: "uploads/6.jpeg", imgId: "6" },
            { email: "17@t.c", password: "123", imgPath: "uploads/7.jpeg", imgId: "7" },
            { email: "18@t.c", password: "123", imgPath: "uploads/8.jpeg", imgId: "8" },
            { email: "19@t.c", password: "123", imgPath: "uploads/9.jpeg", imgId: "9" },
            { email: "100@t.c", password: "123", imgPath: "uploads/10.jpeg", imgId: "10" },

        ])
        .execute();
    res.send("Hello Word");
})

io.on('connection', (socket) => {
    socket.on('join', (token, callback) => {


        const userOp = addUser({ socketid: socket.id, token: token });

        console.log(userOp);


        callback();
    });

    socket.on('disconnect', function () {
        console.log("User Disconnected ");

    });
})
server.listen(3000, () => {
    console.log("Server is Started...");
    console.log("For Load Sample Dataset visit at http://localhost:3000");

})
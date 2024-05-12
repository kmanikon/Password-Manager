import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

//CONNECTION_URL = 'mongodb://mongodb:e43FQweegr6RS6rP@mongodb-xin2-rx02-production/memories-mongo';

const CONNECTION_URL = 'mongodb+srv://kmanikon:Zamn123@cluster0.gbejc2u.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

// init DB connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


/*

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Zeet Node');
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
})

*/

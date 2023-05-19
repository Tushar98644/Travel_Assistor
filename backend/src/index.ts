import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log('Connection to MongoDB is successful'); })
    .catch((err) => { console.log('Failed to connect to MongoDB', err); });


app.listen(port, () => {
    console.log('Server running on port'+ port);
    }
);

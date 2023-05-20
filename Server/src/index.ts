import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import Pin_route from '../routes/Pin_routes';
import User_route from '../routes/User_routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors())

app.use('/api/pin',Pin_route);
app.use('/api/user',User_route);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log('Connection to MongoDB is successful'); })
    .catch((err) => { console.log('Failed to connect to MongoDB', err); });


app.listen(port, () => {
    console.log('Server running on port '+ port);
    }
);

import express from 'express';
import { Register,Login } from '../controller/User_controller';


const router = express.Router();

// Register new user

router.post('/register', Register);

// Login user

router.post('/login', Login);

export default router;
import express  from 'express'; 
import { CreatePin } from '../controller/Pin_controller';
import { GetPins } from '../controller/Pin_controller';
const router = express.Router();

// create new pins

router.post('/', CreatePin);

// get all pins

router.get('/', GetPins);

export default router;
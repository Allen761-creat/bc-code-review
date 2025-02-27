import express from 'express';
import { response } from '../Controllers/aicontroller.js';
const router = express.Router();

router.post('/getreview',response)



export default router
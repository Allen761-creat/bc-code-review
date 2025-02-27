import  dotenv  from 'dotenv';

dotenv.config();

// import app from './src/app.js'
import express from 'express'
const app = express()
import morgan from 'morgan';
app.use(morgan("dev"));

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

import cors from 'cors'
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
import router from './src/Routes/airoute.js'
app.use('/ai', router)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app


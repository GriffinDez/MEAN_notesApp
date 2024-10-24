// require('dotenv').config({path:'./env'})

import  dotenv  from "dotenv";
import  express  from "express";
import  bodyParser  from "body-parser";
import  cors  from "cors";

import  connectDb  from "./db.js";

// middleWare
const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config({
    path: './env'
})

connectDb()

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
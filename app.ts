import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./src/routes/index"
import bodyParser from "body-parser"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//Handel application/json data
app.use(bodyParser.json())
app.use(bodyParser.json({limit: '50mb'}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.use(router);



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

export default app;

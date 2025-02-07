import express from "express"
import 'dotenv/config'
// import Translate from "./module/Translat.js";
import TranslatLab from "./module/TranslatLab.js";

const PORT = process.env.PORT
const app = express()

app.use(express.json());

app.post("/translate",TranslatLab)

app.listen(PORT,()=>{
    console.log("Running")
})
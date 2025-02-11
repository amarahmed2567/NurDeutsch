import express from "express"
import cors from "cors"
import 'dotenv/config'
// import Translate from "./module/Translat.js";
import TranslatLab from "./module/TranslatLab.js";

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json());

app.post("/translate",TranslatLab)

app.listen(PORT,()=>{
    console.log(`Running On Port ${PORT} ...` )
})

// export default  app
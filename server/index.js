const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require("dotenv");
const router = require("./router")
const bodyParser = require('body-parser');
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }))


const PORT = 5000;

app.use("/", router)

dotenv.config();




app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening on port ${PORT}`)
})

const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const router = require("./router")
app.use(cors())
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({extended: true }))



app.use("/", router)

dotenv.config();




app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening on port 5000`)
})

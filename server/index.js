// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require("dotenv");

// const app = express();
// const PORT = 5000;

// dotenv.config();

// app.use(bodyParser.urlencoded({extended: false }))
// app.use(bodyParser.json());

// const router = require('./router');
// app.use("/forcasts", router);
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     const date = new Date();
//     res.json({currentTime: date.toTimeString()})
//     console.log("Received a GET request")
// });

// app.listen(PORT, '127.0.0.1', () => {
//     console.log(`Server is listening on port ${PORT}`)
// })

const express = require('express');
const app = express();
const dotenv = require("dotenv");
const router = require("./router")
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true }))


const PORT = 5000;

app.use("/", router)

dotenv.config();




app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening on port ${PORT}`)
})

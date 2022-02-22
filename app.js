const express = require('express');
const bodyParser = require('body-parser');

const fileRouter = require('./routes/file.router');

const app = express();

app.use(bodyParser.json());

app.use('/file', fileRouter);

app.use((request, response, next) => {
    response.status(404).json({
        message: "page not found"
    })
})

app.use((error, request, response, next) => {
    response.status(400).json({
        message: error.message
    })
})

app.listen(3000);
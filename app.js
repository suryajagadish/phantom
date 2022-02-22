const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const fileRouter = require('./routes/file.router');
const authRouter = require('./routes/auth.router');
const req = require('express/lib/request');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './public/images');
    },
    filename: (request, file, callback) => {
        const fileName = `${file.fieldname}-${new Date().getUTCMilliseconds()}-${Math.floor(Math.random() * 10000000)}.jpeg`;
        callback(null, fileName);
    }
})

const upload = multer({ storage });

const app = express();

app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(bodyParser.json());

app.use('/file', fileRouter);
app.use('/auth', authRouter);

app.post('/upload', upload.single('image'), (request, response, next) => {
    response.json({
        action: "success",
        filename: request.file.filename
    });
})

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
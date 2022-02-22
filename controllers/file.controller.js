const fs = require('fs');
const fsPromise = require('fs').promises;

exports.postFileWrite = (request, response, next) => {
    const fileContent = request.body.data;
    if(!fileContent){
        return next(new Error('write data is missing'));
    }
    const logger = fs.createWriteStream('./data/file.txt', {
        flags: 'a'
    })
    return logger.write(`${fileContent}\n`, (error) => {
        logger.end();
        if(error){
            return response.status(400).json({
                write: "failed"
            });
        }
        return response.status(200).json({
            write: "success"
        });
    });
}

exports.getFileRead = async (request, response, next) => {
    try{
        const data = await fsPromise.readFile('./data/file.txt', 'utf8');
        return response.json({
            data
        });
    }
    catch(error){
        next(new Error('read file failed'));
    }
}
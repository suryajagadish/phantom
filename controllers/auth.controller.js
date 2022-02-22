const jwt = require('jsonwebtoken');
const secret = "phantomsmartsolutions";

exports.postSignin = (request, response, next) => {
    const { username, password } = request.body;
    
    if(!username || !password){
        return next(new Error('invalid data format'));
    }

    const payload = { username };
    
    jwt.sign(payload, secret, (error, token) => {
        if(error){
            return response.json({
                signin: "failed"
            });
        }
        return response.json({
            signin: "success",
            token
        });
    });  
}

exports.getSignedin = (request, response, next) => {
    try{
        const token = (request.headers['authorization']).split(' ')[1];
        jwt.verify(token, secret, (error, payload) => {
            if(error){
                throw new Error();
            }
            return response.json({
                username: payload.username,
                isAuthenticated: true
            })
        })
    }
    catch(error){
        return response.json({
            username: "unknown",
            isAuthenticated: false
        })
    }
}
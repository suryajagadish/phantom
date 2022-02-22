const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: 'key_id',
    key_secret: 'key_secret'
});

var options = {
    amount: 100,
    currency: "INR",
    receipt: "phantom_razorpay_1"
};

exports.postCreateOrder = (resquest, response, next) => {
    return instance.orders.create(options)
        .then((order) => {
            response.json({
                order,
                status: "success"
            });
        })
        .catch((error) => {
            response.json({
                status: "failed"
            });
        })
}
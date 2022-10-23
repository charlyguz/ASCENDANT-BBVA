const express = require('express');
const cors = require('cors');

const app = express();

const stripe = require('stripe')('sk_test_51LvKUxHJpuPbpMgxgtZZhfauokhD8H4sohtuNkCYdj6vfK7RbhH4rs6fMdh6INUocdBNJddfTM5duM4z4bJQXVFe00DB2gMSeL');

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

app.post('/api/checkout', async(req, res) => {
    try {
        const {id, amount} = req.body;
        
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'NFT BBVA ascendent',
            payment_method: id,
            confirm: true
        })
        
        console.log(payment);
        res.send({message: 'Payment Successful'});
        
    } catch (error) {
        console.log(error);
        res.json({message: error.raw.message});
    }
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
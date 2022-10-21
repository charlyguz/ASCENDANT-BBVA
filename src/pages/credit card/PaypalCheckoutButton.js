import React from "react";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";

const PaypalCheckoutButton = ( {order}) => {
    const paypalConf = {
        currency: 'USD',
        env: 'sandbox',
        client: {
            sandbox: 'AUkT74s6KZ_-PFLv6wWXn_HYnYJwomMf2TM9bJIFiqnGmSq0dbzmXkILMqe4TSR2tuAz5vKT4bjsEQYg',
            production: 'YOUR-PRODUCTION-APP-ID',
        },
        style: {
            label: 'pay',
            size: 'medium', 
            shape: 'rect',
            color: 'blue'
        }
    };

    const PaypalButton = paypal.Button.driver('react', {React, ReactDOM});

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount: {
                        total: order.total,
                        currency: paypalConf.currency
                    },
                    description: 'Buying NFT',
                    custom: order.customer || '',
                    item_list: {
                        items: order.items
                    }
                }
            ],
            note_to_payer: 'Contact us for any questions on your order.'
        };
        return actions.payment.create({payment});
    }

    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
            .then(response => {
                console.log(response);
                alert(`Payment completed!, ID: ${response.id}`);
            })
            .catch(err => {
                console.log(err);
                alert('Payment error!');
            });
    }

    const onError = (err) => {
        console.log(err);
        alert('The payment was not made, try again');
    }

    const onCancel = (data, actions) => {
        alert(`The payment was cancelled!`);
    }

    return (
        <PaypalButton 
            env={paypalConf.env}
            client={paypalConf.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(err) => onError(err)}
            style={paypalConf.style}
            commit
            locale="es_MX"
        />
    );
}

export default PaypalCheckoutButton;
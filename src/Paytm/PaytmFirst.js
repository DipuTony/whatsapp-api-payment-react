import axios from 'axios'
import React from 'react'

function PaytmFirst() {

    const handleBtn = () => {

        const payload = {
            "amount":"108"
        }


        axios.post('http://203.129.217.245:80/api/transaction-token', payload)
        // axios.post('https://securegw-stage.paytm.in/order/process', payload, { "Content-Type": "application/json" } )
        .then((res) => {
            console.log("Pytm success", res)
            openJsCheckoutPopup(res.data.orderId, res.data.txnToken, res.data.amount,)
        })
        .catch((err) => console.log("Error Paytm", err))

    }

    function openJsCheckoutPopup(orderId, txnToken, amount) {
        var config = {
            "root": "",
            "flow": "DEFAULT",
            "data": {
                "orderId": orderId,
                "token": txnToken,
                "tokenType": "TXN_TOKEN",
                "amount": amount
            },
            "merchant": {
                "redirect": true
            },
            "handler": {
                "notifyMerchant": function (eventName, data) {
                    console.log("notifyMerchant handler function called");
                    console.log("eventName => ", eventName);
                    console.log("data => ", data);
                }
            }
        };
        if (window.Paytm && window.Paytm.CheckoutJS) {
            // initialze configuration using init method 
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                // after successfully updating configuration, invoke checkoutjs
                window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error) {
                console.log("error => ", error);
            });
        }
    }



    return (
        <>
            <button className='border bg-sky-400 rounded-sm shadow-md' onClick={handleBtn}> openJsCheckoutPopup </button>
        </>
    )
}

export default PaytmFirst
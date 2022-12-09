import React from 'react'
import { CheckoutProvider, Checkout, injectCheckout } from 'paytm-blink-checkout-react'

function PaytmPackage() {

    let config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
            "orderId": "OD345", /* update order id */
            "token": "", /* update token value */
            "tokenType": "TXN_TOKEN",
            "amount": "1010" /* update amount */
        },
        "handler": {
            "notifyMerchant": function (eventName, data) {
                console.log("notifyMerchant handler function called");
                console.log("eventName => ", eventName);
                console.log("data => ", data);
            }
        }
    }

    return (
        <>

            <CheckoutProvider config={config} openInPopup="false" env='PROD'>            </CheckoutProvider>
        </>
    )
}

export default PaytmPackage
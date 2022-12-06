import axios from 'axios'
import React from 'react'

function PaytmFirst() {

    const handleBtn = () => {

        const payload = {
            "custId": "dipu001",
            "orderId": "9999333393",
            "mobileNo": "1234567890",
            "amount": "1001",
            "email": "test@dipu.com",
            "name": "dipu100",
            "address": "ranchi"
        }


        // axios.post('http://203.129.217.245:80/api/paytmOrder', payload, )
        axios.post('https://securegw-stage.paytm.in/order/process', payload, { "Content-Type": "application/json" } )
            .then((res) => console.log("Pytm Payment Done", res))
            .catch((err) => console.log("Error Payment", err))

    }

    return (
        <>
            <button className='border bg-sky-400 rounded-sm shadow-md' onClick={handleBtn}> Paytm First </button>
        </>
    )
}

export default PaytmFirst
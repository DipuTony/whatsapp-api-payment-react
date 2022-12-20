import axios from 'axios'
import React from 'react'
import PaytmFirst from './PaytmFirst'
import PaytmQR from './PaytmQR'

function PaytmIndex() {

    const test = () => {

        axios.post('https://securegw-stage.paytm.in/v3/order/status',
            {
                'body': {
                    'mid': 'Ranchi86231756834138',
                    'orderId': 'ORDER_2hoeBHCjJg'
                },
                'head': {
                    'signature': "sTnJ0Fzg3Uz61OxJTbL5Xa1TI5nDQiWz90UbcR/tNtoys6AJ9vzE5R9AA6kg0adERtyebyj4CHx9zLX0bXC2A5ZbKod01JkdN2i4aAxtiyY="
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((res) => console.log("Response", res))

            .catch((err) => console.log("error", err))
    }

    return (
        <>

            <button onClick={test} className="bg-sky-300 px-3 py-2"> Check </button>

            ----------- Check Status ---------



            <p className='my-5'>  ---------   Paytm Payment Gatewat   -----------</p>
            <PaytmFirst />
            <p className='my-5'>  ---------   Paytm QR   -----------</p>
            <PaytmQR />
        </>
    )
}

export default PaytmIndex
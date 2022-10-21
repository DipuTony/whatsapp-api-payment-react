import React from 'react'
import RazorpayOld from './RazorpayOld'
import UPI from './UPI'

function PaymentIndex() {
    return (
        <div>
    
------------- Simple Razorpay -------------
            <RazorpayOld />

================== QR Code ================
<UPI />

        </div>
    )
}

export default PaymentIndex

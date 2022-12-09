import React from 'react'
import Paytm3 from './Paytm3'
import PaytmFirst from './PaytmFirst'
import PaytmPackage from './PaytmPackage'
import PaytmSecound from './PaytmSecound'

function PaytmIndex() {
    return (
        <>
            <div>PaytmIndex</div>
            <p>  ---------   PaytmFirst  -----------</p>
            <PaytmFirst />

            <p>---------   PaytmSecound  -----------</p>
            <PaytmSecound />

            <p>--------------paytm 3-----------</p>
            <Paytm3 />
            <p>--------------paytm Package-----------</p>
            <PaytmPackage />


        </>
    )
}

export default PaytmIndex
import React from 'react'
import PaytmFirst from './PaytmFirst'
import PaytmSecound from './PaytmSecound'

function PaytmIndex() {
    return (
        <>
            <div>PaytmIndex</div>
            <p>  ---------   PaytmFirst  -----------</p>
            <PaytmFirst />

            <p>---------   PaytmSecound  -----------</p>
            <PaytmSecound />
        </>
    )
}

export default PaytmIndex
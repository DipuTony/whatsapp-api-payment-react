import React from 'react'

function PaytmQR() {

    const handleBtn=()=>{
        console.log("QR Button clicked...")
    }

    return (
        <>
            <button className='border bg-sky-400 rounded-sm shadow-md py-2 px-4' onClick={handleBtn}> Payment QR </button>
        </>
    )
}

export default PaytmQR
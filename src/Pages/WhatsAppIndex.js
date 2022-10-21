import React from 'react'
import DynamicVar from './DynamicVar'
import DynamicWithURL from './DynamicWithURL'
import WpFileUpload from './WpFileUpload'
import WpSend from './WpSend'

function WhatsAppIndex() {
    return (
        <div>
            <div className='gird grid-cols-12 flex'>
                <div className='col-span-9 m-5 flex leading-7 space-x-5'>
                    <WpSend />
                    <DynamicVar />
                    <DynamicWithURL />
                    <WpFileUpload />
                </div>
            </div>
        </div>
    )
}

export default WhatsAppIndex

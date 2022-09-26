import React, { useState } from 'react'
import axios from 'axios'

function WpSend() {
    const [number, setNumber] = useState()
    const [type, setType] = useState()
    const [parameter, setParameter] = useState()
    const [orderId, setOrderId] = useState()

    // const header = {
    //     headers: {
    //         Authorization: `Bearer EAAIZBvM1yOr0BAMQZAsv6xYu7UQhBAo4Re1xdsKsCgDwrUCiaOl9AW9MpAPuOgn99XFFwIMRtjaFMb5bQ4ZCc4gWc5R8U6Kd5lPwDoeKKZCHxALoqU4oaztV7yFCWOZAWtfD6jxSF9OKHTlZAps75DqfpveFzg4pZARHGADIEiTGx2zEdQ2PlYMtLgsRscKOCrmqgr0mbbE2u4jDALZC1ZC49thfON1XryD4ZD`,
    //         Accept: 'application/json'
    //     }
    // }


    const handleSave = () => {
        console.log(process.env.REACT_APP_ACCESS_TOKEN)
        // console.log("Values", number, type, parameter)
        const mobileNo = +91 + number;
        const config = {
            headers: { Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}` }
        };

        const bodyParameterSimple = {
            messaging_product: "whatsapp",
            to: mobileNo,
            type: "template",
            template: {
                name: type,
                language: {
                    "code": "en_US"
                }
            }
        };
        const bodyParameterDynamic = {

            messaging_product: "whatsapp",
            to: mobileNo,
            "type": "template",
            "template": {
                "name": type,
                "language": {
                    "code": "en_US",
                    "policy": "deterministic"
                },
                "components": [
                    {
                        "type": "body",
                        "parameters": [
                            {
                                "type": "text",
                                "text": parameter
                            },
                            {
                                "type": "text",
                                "text": orderId
                            }
                        ]
                    },
                    
                    
                ]
            }


        };

        axios.post(
            `https://graph.facebook.com/v14.0/${process.env.REACT_APP_PHONE_NUMBER_ID}/messages`,
            bodyParameterDynamic,
            config
        ).then(console.log).catch(console.log);
    }

    return (
        <>
            <div className='border p-10 shadow-2xl leading-7'>
                <div className='my-2'>
                    <p>WhatsApp Number</p>
                    <input onChange={(e) => setNumber(e.target.value)} type="text" className='px-3 border border-gray-400 w-60 h-8' />
                </div>
                <div className='my-2'>
                    <p>Type</p>
                    <select onChange={(e) => setType(e.target.value)} type="" className='px-3 border border-gray-400 w-60 h-8' >
                        <option value="">Select</option>
                        <option value="hello_world">Hello World</option>
                        <option value="trans_first">Trans First</option>
                        <option value="trn_2_var">trn_2_var</option>
                        <option value="trans_with_var">trans_with_var</option>
                    </select>
                </div>
                <div className='my-2'>
                    <p>Name</p>
                    <input onChange={(e) => setParameter(e.target.value)} type="text" className='px-3 border border-gray-400 w-60 h-8' />
                </div>
                <div className='my-2'>
                    <p>Oder ID</p>
                    <input onChange={(e) => setOrderId(e.target.value)} type="text" className='px-3 border border-gray-400 w-60 h-8' />
                </div>
                <div className='my-3 flex justify-center'>
                    <button onClick={handleSave} className='px-4 py-1 bg-green-500'>Send</button>
                </div>
            </div>
        </>
    )
}

export default WpSend
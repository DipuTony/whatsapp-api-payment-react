import axios from "axios";
import React from "react";

const PaytmSecound1 = () => {
    // function openJsCheckoutPopup(orderId, txnToken, amount){
    var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
            "orderId": "od4535",
            "token": "DFGDFG",
            "tokenType": "TXN_TOKEN",
            "amount": 1004
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



const PaytmSecound = () => {
    const paytmHandler = async () => {
        try {
            const res = await fetch("http://203.129.217.245:80/api/paytmOrder", {
                method: "POST",
                // body: JSON.stringify({ prodId: 4, quantity: 1 }),
                body: JSON.stringify({
                    "custId": "dipu001",
                    "orderId": "9999333393",
                    "mobileNo": "1234567890",
                    "amount": "1001",
                    "email": "test@dipu.com",
                    "name": "dipu100",
                    "address": "ranchi"
                }),
                headers: { "Content-Type": "application/json" },
            });
            const data1 = await res.json();

            console.log("response", data1)

            const data = {
                "custId": "dipu001",
                "orderId": "9999333393",
                "mobileNo": "1234567890",
                "TXN_AMOUNT": "1001",
                "email": "test@dipu.com",
                "name": "dipu100",
                "address": "ranchi",
                "MID": "Ranchi15957061185289",
                "WEBSITE": "DEFAULT",
                // "callback_url": "",
                "CHECKSUMHASH": data1.data.checkSum
            }
            const information = {
                action: "https://securegw-stage.paytm.in/order/process",
                params: data,
            };
            post(information);
        } catch (err) {
            console.error(err);
        }
    };

    const paytmNew = () => {

        const payload = {
            "custId": "dipu001",
            "orderId": "9999333393",
            "mobileNo": "1234567890",
            "amount": "1001",
            "email": "test@dipu.com",
            "name": "dipu100",
            "address": "ranchi"
        }

        axios.post('http://203.129.217.245:80/api/paytmOrder', payload)
            .then((res) => {
                console.log("RES Chesom", res.data.data.checkSum)
                callPayTm(res.data.data.checkSum)
            })
            .catch((err) => console.log("Errror in checksum", err))
    }

    const callPayTm = (chechsum) => {
        const payload = {
            "custId": "dipu001",
            "orderId": "9999333393",
            "mobileNo": "1234567890",
            "TXN_AMOUNT": "1001",
            "email": "test@dipu.com",
            "name": "dipu100",
            "address": "ranchi",
            "MID": "Ranchi15957061185289",
            "WEBSITE": "DEFAULT",
            // "callback_url": ""
            "CHECKSUMHASH": chechsum
        }

        axios.post('https://securegw-stage.paytm.in/order/process', payload)
            .then((res) => {
                console.log("Payment Afert", res)
            })
            .catch((err) => console.log("Errror in Paytm", err))

    }


    return <>
        <p>

            <button onClick={PaytmSecound1}>PAYTM new</button>
        </p>
        <p>

            <button onClick={paytmHandler}>PAYTM</button>
        </p>
        <p>

            <button onClick={paytmNew}>PAYTM 11</button>
        </p>
    </>
};

function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", key);
        input.setAttribute("value", params[key]);
        form.appendChild(input);
    });

    return form;
}

function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
}

// function jobApplication({ rejection, giveChance }) {
//   const experience = 0; // learning and done projects

//   const passion = "80%";

//   let skills = [Node.js, React.js, Mongo.db, postgreSQl, html, Bootstrap, Jquery, AJAX, etc...];

//   if (giveChance) {
//     console.log(`thanks, you wont regret && my exp : ${experience++} `);
//     skills = [...skills, newSkills];
//   } else rejection++;
// }

// if(error) console.log(`pseudo error `)

export default PaytmSecound;
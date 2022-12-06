import React from "react";

const PaytmSecound = () => {
    const paytmHandler = async () => {
        try {
            const res = await fetch("http://203.129.217.245:80/api/paytmOrder", {
                method: "POST",
                body: JSON.stringify({ prodId: 4, quantity: 1 }),
                headers: { "Content-Type": "application/json" },
            });
            //   const data = await res.json();
            const data = {
                "custId": "dipu001",
                "orderId": "9999333393",
                "mobileNo": "1234567890",
                "TXN_AMOUNT": "1001",
                "email": "test@dipu.com",
                "name": "dipu100",
                "address": "ranchi",
                "MID" : "Ranchi15957061185289",
                "WEBSITE" : "DEFAULT",
                "callback_url" : ""
                // "CHECKSUMHASH" : "dfg"
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
    return <button onClick={paytmHandler}>PAYTM</button>;
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
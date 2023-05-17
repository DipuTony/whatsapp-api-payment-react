import axios from 'axios'
import React from 'react'

const Test = () => {

    const fetch = async () => {
        const data = await axios.get('http://localhost:3000/user')

        const result = data.data.find(item => item.id == 1 && item.mobile == 1223)

        if(result){
            console.log("Login success")
        }else{
            console.log("Login Failed")

        }

        // console.log(data)
        // console.log("data", data.data.find(item => item.id == 1 && item.mobile==123))
    }

    return (
        <div>
            <button onClick={fetch}>fetch</button>
            Test
        </div>
    )
}

export default Test

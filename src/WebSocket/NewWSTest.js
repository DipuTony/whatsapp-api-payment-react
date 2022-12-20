import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';


const NewWSTest = () => {
    const close = false

    // if (close) {


        Pusher.logToConsole = true;


        const options = {
            broadcaster: 'pusher',
            key: '09217261bc9ce48570cc',
            wsHost: "192.168.0.240",
            wsPort: 6001,
            forceTLS: false,
            disableState: true,
            cluster: "ap2",
            encrypted: false,
        }

        // window.Echo = new Echo({
        //     ...options,
        //     client: new Pusher(options.key, options)
        // });


        // window.Echo.channel('channel')





        /////////////////////////////////////////////////


        var pusher = new Pusher('09217261bc9ce48570cc', options);


        var channel = pusher.subscribe('channel');
        channel.bind('hit', function (data) {
            // alert(JSON.stringify(data));
            console.log("===", JSON.stringify(data));
        });



    // }













    // var pusher = new Pusher('09217261bc9ce48570cc', {
    //   cluster: 'ap2'
    // });

    // var channel = pusher.subscribe('channel');
    // channel.bind('hit', function(data) {
    //   alert(JSON.stringify(data));
    //   console.log("=++++++++++++++++++",JSON.stringify(data));
    // });




    // const pusher1 = new Pusher('09217261bc9ce48570cc');

    // pusher1.connection.bind('hit', function (err) {
    //     console.log("Puster ==", err)
    //     if (err.error.data.code === 4004) {
    //         console.log('Over limit!');
    //     }
    // });


    // var pusher2 = new Pusher("09217261bc9ce48570cc", {
    //     cluster: "ap2",
    //   });
    //   var channel2 = pusher2.subscribe("channel");

    //   channel2.bind("hit", (data) => {
    //     // Method to be dispatched on trigger.
    //     console.log("Finnaly.......................",data)
    //   });




    // const pusher = new Pusher("09217261bc9ce48570cc", { cluster: "ap2" });
    // var channel = pusher.subscribe("channel");

    // Some useful debug msgs

    // Pusher.log = function(msg) {
    //     console.log("LOGGGG",msg);

    //   };



    // useEffect(() => {
    // console.log("Use effevt caked")

    //         pusher.connection.bind('connecting', function () {
    //             console.log("connecting to pusher");
    //         });
    //         pusher.connection.bind('connected', function () {
    //             console.log('Connected to Pusher!');
    //         });
    //         pusher.connection.bind('failed', function () {
    //             console.log('Connection to Pusher failed :(');
    //         });
    //         channel.bind('subscription_error', function (status) {
    //             console.log('Pusher subscription_error');
    //         });
    //         channel.bind('subscription_succeeded', function (status) {
    //             console.log('Pusher subscription_succeeded');
    //         });

    //         channel.bind("ninja", function (e) {
    //             console.log(e);
    //         });


    //     }, [ch])


    const fun = () => {

        console.log("Clicked");
    }






    //////////




    // pusher1.bind('subscription_succeeded', function (members) {
    //     console.log('========successfully subscribed!');
    // })

    // pusher1.listen('subscription_succeeded', function (members) {
    //     console.log('========successfully subscribed!');
    // })

    // const pusher1 = new Pusher('09217261bc9ce48570cc');

    // pusher1.listen('subscription_succeeded', function (members) {
    //     console.log('========successfully subscribed!');
    // });

    // console.log("ch". ch)


    // .listen('hit', (e) => {
    //     console.log("1st", e)
    // })


    // const pusher1 = new Pusher('09217261bc9ce48570cc');
    // pusher1.connection.bind('error', function (err) {
    //     console.log("Puster ==", err)
    //     if (err.error.data.code === 4004) {
    //         console.log('Over limit!');
    //     }
    // });


    // channel.listen('hit', function (data) {
    //     console.log("3rd", data)
    // console.log(JSON.stringify(data))
    // });



    // channel.bind('pusher:subscribe', function (members) {
    //     console.log('========successfully subscribed!');
    // });

    // }



    return (
        <>
            <div className='my-20'></div>
            <button onClick={fun} className='bg-sky-400 px-2 py-1 border'>Click</button>
        </>
    )


}
export default NewWSTest
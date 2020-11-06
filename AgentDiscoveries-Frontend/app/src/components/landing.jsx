import * as React from 'react';




import { Redirect } from 'react-router-dom';

export default class Landing extends React.Component {
    render() {
        var dt = new Date();
        var time = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
        var time2 = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+(dt.getHours()+1)).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));


        return (

            <div>
                <h1>Welcome to MI6 Agent Discoveries!</h1>
                <h2>Please use the navigation above to find your locations/regions and to submit any relevant reports.</h2>
                <h3> Date and time:</h3>
                <h4> Europe/London </h4>
                <h4>{`${time} `}</h4>
                <h4> Europe/Berlin </h4>
                <h4>{`${time2} `}</h4>

            </div>


        );

    }

}
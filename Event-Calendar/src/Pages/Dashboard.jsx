import Navigator from "../routes/Navigation.jsx"
import DisplayEvents from "../Display_Events.jsx"
import React, { useState } from 'react';

function Dashboard() {

    let hasAccount;
    let user = "";

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [Logged, setLogged] = useState(false);

    function AccountMade() {


        if (localStorage.getItem("UserInformation") !== null) {
            hasAccount = true;
            user = JSON.parse(localStorage.getItem("UserInformation"))
        }
        else {
            hasAccount = false;
            console.log(localStorage.getItem("UserInformation"));
        }
}


    const noAccount =
        <>
        <h1>Please Create An account</h1>
    </>

    function nameCheck(e) {
        setName(e.target.value);
    }
    function passwordCheck(e) {
        setPassword(e.target.value)
    }
    function login() {
        if (name === user.name && password === user.password) {
            setLogged(true)
        }
    }


    const yesAccount =
        <>
            <h1>Welcome, please log in </h1>
            <label name="Name">Name</label> <br/>
            <input type="text" id="Name" onChange={nameCheck} /><br />
            <label name="password">Password</label> <br />
            <input type="text" id="password" onChange={passwordCheck} /><br />
            <button type="button" onClick={login }> Log In</button>
        </>


    const Calender =
        <>
            <h1>CALENDAR</h1>
            <DisplayEvents/>
        </>
    
    const NoCalendar =
        <h1></h1>
        

    return (
        <>
            <Navigator />
            {AccountMade()}
            {hasAccount ? yesAccount : noAccount}
            {Logged ? Calender : NoCalendar}
        </>
    );
}
   

export default Dashboard;


function DisplayEvents() {


    let events = JSON.parse(localStorage.getItem("Events"));

    return (
        <ul>
            {events.map(event =>
                <li>

                    This event is: {event.name}, Happening on {event.date} at {event.time} <br />
                    You Described it as: "{event.desc}" <br/>
                    The event will be at {event.loca}
                </li>)}
        </ul>
    )
}

export default DisplayEvents;
import Navigator from "../routes/Navigation.jsx"
function AddEvent() {

    function Event(name, date, time, desc, loca) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.desc = desc;
        this.loca = loca;
    }


    const UserAdds =
        <>
            <h1>Fill in Event Details to add Event </h1>
            <label name="EventName">Name</label> <br />
            <input type="text" id="EventName" /><br />
            <label name="EventDate">Date</label> <br />
            <input type="date" id="EventDate" /><br />
            <label name="EventTime">Time</label> <br />
            <input type="time" id="EventTime" /><br />
            <label name="Description">Description</label> <br />
            <input type="text" id="Description" /><br />
            <label name="EventLocation">Location</label> <br />
            <input type="text" id="EventLocation" /><br />
            <button type="button" onClick={AddEvent}>Add Event</button>
        </>

    let events = JSON.parse(localStorage.getItem("Events"));

    if (events === null) {
        events = [];
    }

    function AddEvent() {
        let NewEvent = new Event(EventName.value, EventDate.value, EventTime.value, Description.value, EventLocation.value)
        events.push(NewEvent)
        localStorage.setItem("Events", JSON.stringify(events));
        console.log(NewEvent)
        console.log(localStorage.getItem("Events"));
    }

   

    return (
        <>
            <Navigator />
            {UserAdds}
        </>
    );
}

export default AddEvent;
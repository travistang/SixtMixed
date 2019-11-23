import React from 'react'

export default function NextEvent() {
    const [nextEvent] = React.useState({startingTime: 16, duration: 2, endTime: 18, title: "Dinner", location:"Boltzmannstraße 3, 85748 Garching"});
    const [timeSlots, setTimeSlots] = React.useState([]);

    React.useEffect( () => {
            let tmp = [];
            for(let i = 0; i<nextEvent.duration; i++) {
                tmp.push(nextEvent.startingTime + i);
            }
            setTimeSlots(tmp);
        }, [nextEvent.duration, nextEvent.startingTime, nextEvent.endTime]
    )

    return(
        <>
        <p>Your next event is: </p>
        <div className="calendar">
            <div id="time">
                <div>{(nextEvent.startingTime - 1).toString()+":00"}</div>
                {
                    timeSlots.map(timeSlot => (
                        <div className="top-border" key={timeSlot.toString()}>{timeSlot.toString()+":00"}</div>
                    ))
                }
                <div className="top-border">{(nextEvent.endTime + 1).toString()+":00"}</div>
            </div>
            <div id="event">
                <div style={{flex: 1}}></div>
                <div className="eventSlot" style={{flex:nextEvent.duration}}>
                    <p className="title">{nextEvent.title}</p>
                    <p className="location">{nextEvent.location}</p>
                </div>
                <div style={{flex: 1}}></div>
            </div>
        </div>
        </>
    )   
}
import React from 'react'

export default function NextEvent() {
    const [nextEvent] = React.useState({startingTime: 16, duration: 3, endTime: 19, title: "Dinner", location:"Boltzmannstraße 3, 85748 Garching"});
    const [timeSlots, setTimeSlots] = React.useState([]);

    React.useEffect( () => {
            let tmp = [];
            for(let i = 0; i<nextEvent.duration; i++) {
                tmp.push(nextEvent.startingTime + i);
            }
            setTimeSlots(tmp);
        }, [nextEvent.duration, nextEvent.startingTime, nextEvent.endTime]
    )

    function getHeight() {
        return ((1/(nextEvent.duration + 2))*100).toString() + "%";
    }

    function getHeightRest() {
        return ((1-2/(nextEvent.duration + 2))*100).toString() + "%";
    }

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
                <div style={{height: getHeight()}}></div>
                <div className="eventSlot" style={{height: getHeightRest()}}>
                    <p style={{'font-weight': 'bold'}}>{nextEvent.title}</p>
                    <p className="location">{nextEvent.location}</p>
                </div>
                <div style={{height: getHeight()}}></div>
            </div>
        </div>
        </>
    )   
}
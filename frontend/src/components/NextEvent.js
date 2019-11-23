import React from 'react'

export default function NextEvent() {
    const [events, setEvents] = React.useState([{title: "test"}, {title: "test2"}]);
    const [nextEvent, setNextEvent] = React.useState({startingTime: 16, duration: 2, endTime: 18});
    React.useEffect(() => {
        async function getData() {
            const data = await fetch('test');
            setEvents(await data.json());
        }
        getData()
    }, []);

    function getTime() {
        let tmp = [];
        for(let i=0; i<=nextEvent.duration; i++) {
            tmp.push(nextEvent.startingTime + i);
        }
        return tmp;
    }

    return(
        <>
        <p>Your next event is: </p>
        <div className="calendar">
            <table>
                <tr>
                    <td className="first">{nextEvent.startingTime-1}</td>
                    <td>a</td>
                </tr>
                {getTime().map((time) => 
                    <tr className="event">
                        <td className="first">{time}</td>
                        <td>a</td>
                    </tr>
                )}
                <tr>
                    <td className="first">{nextEvent.endTime+1}</td>
                    <td>a</td>
                </tr>
            </table>
        </div>
        </>
    )   
}
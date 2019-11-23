import React from 'react';
import './style.css';
import CommuteLogo from '../CommuteLogo';
import SmallDescription from './smallDescription';
import DetailsWithIcons from './detailsWithIcons';
import Icon from '@material-ui/core/Icon';
import Map from './map';
import { timeToString, timeInMinutes } from '../../utils';

function EventOverview({
    // the event we are trying to attend
    event,

    // journey info
    startLocation,
    startLocationCoordinate,
    destination,
    destinationCoordinate,
    startTime,
    endTime,
    totalPrice,
    isTaxi,
    numberFellowPassengers
}) {

    const [useSixtMixed, setUseSixtMixed ] = React.useState(false);
    const timeToLeave = timeInMinutes(startTime - new Date());
    // const timeToLeave = timeInMinutes(startTime - new Date());
    const arrivedTimeBeforeEvent = timeInMinutes(event.startTime - endTime);
    const isLate = arrivedTimeBeforeEvent < 0;

    return (
        <div className="EventOverview-Container">
            <Map
                useSixtMixed={useSixtMixed}
                startLocation={startLocationCoordinate}
                endLocation={destinationCoordinate}
            />

            <div className="EventOverview-Row EventOverview-Separator">
                <CommuteLogo />
                <div className="EventOverview-LocationContainer">
                    <div className="EventOverview-LocationContainerInner">
                        {startLocation}
                    </div>
                    <div className="EventOverview-LocationContainerInner" />
                    <div className="EventOverview-LocationContainerInner">
                        {destination}
                    </div>
                </div>
                <div className="EventOverview-Duration">
                    <SmallDescription 
                            label="Type" 
                            value={isTaxi?"Ride":"Share"} />
                    <SmallDescription 
                        label="Time to leave" 
                        value={`${timeToLeave} Mins`} />
                </div>
            </div>
            <div className="EventOverview-Row EventOverview-RowSummary">
                <DetailsWithIcons
                    iconName="euro"
                    value={totalPrice.toFixed(2)} />
                <DetailsWithIcons
                    iconName="people"
                    value={numberFellowPassengers}
                />
                <DetailsWithIcons
                    iconName="directions_run"
                    style={isLate ? {color: '#ff5f00'}: {color: 'white'}}
                    value={
                        isLate?
                        `${-arrivedTimeBeforeEvent} mins late`:"On time"
                    }
                />
                <DetailsWithIcons
                    iconName="flag" 
                    value={timeToString(endTime)} />
            </div>
            <div className="EventOverview-Row EventOverview-SixtMixedRow">
                <div className={`EventOverview-Checkbox`} 
                    onClick={() => setUseSixtMixed(!useSixtMixed)}>
                    { useSixtMixed?(
                        <Icon>done</Icon>
                    ): null}
                    
                </div>
                Open ride for Sixt Mixed2Go
            </div>
            
        </div>
    );
}

export default EventOverview;
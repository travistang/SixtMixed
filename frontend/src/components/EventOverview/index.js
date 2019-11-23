import React from 'react';
import './style.css';
import CommuteLogo from '../CommuteLogo';
import SmallDescription from './smallDescription';
import DetailsWithIcons from './detailsWithIcons';
import Icon from '@material-ui/core/Icon';
import Button from '../Button';
import { timeToString, timeInMinutes, addMinutesToTime } from '../../utils';

export default function EventOverview({
    // event info
    title     = 'Some event',
    nextEventTime = addMinutesToTime(new Date(), 50),
    // journey info
    startLocation = "Dülferstrasße",
    destination  = "Garching",
    startTime = addMinutesToTime(new Date(), 35),
    endTime   = addMinutesToTime(new Date(), 60),
    totalPrice = 10,

    // general info
    totalOffersAvailable = 1
}) {

    const timeToLeave = timeInMinutes(startTime - new Date());
    const arrivedTimeBeforeEvent = timeInMinutes(nextEventTime - endTime);
    const isLate = arrivedTimeBeforeEvent < 0;

    return (
        <div className="EventOverview-Container">
            <div className="EventOverview-AvailableText">
                {totalOffersAvailable} Offer(s) available
            </div>
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
                        label="Time to leave" 
                        value={`${timeToLeave} Mins`} />
                </div>
            </div>
            <div className="EventOverview-Row">
                <DetailsWithIcons
                    iconName="euro"
                    value={totalPrice} />
                <div style={{flex: 1}} />
                <DetailsWithIcons
                    iconName="directions_run"
                    style={isLate && {color: '#ff5f00'}}
                    value={
                        isLate?
                        `${-arrivedTimeBeforeEvent} mins late`:"On time"
                    }
                />
                <DetailsWithIcons 
                    iconName="flag" 
                    value={timeToString(endTime)} />
            </div>
            <Button text="Book now" />
        </div>
    );
}
import React from 'react';
import EventOverview from '../EventOverview';
import SwipeableViews from 'react-swipeable-views';
import Button from '../Button/index';
import './style.css';

export default function({ events }) {
    const [ viewsIndex, setViewsIndex ] = React.useState(0)
    return (
        <div className="OfferList">
            <div className="OfferList-AvailableText">
                {events.length} Offer(s) available
                <div style={{flex: 1}} />
                {viewsIndex + 1} / {events.length}
            </div>
            <SwipeableViews
                onChangeIndex={setViewsIndex}
                enableMouseEvents
                containerStyle={{ 
                    flex: 1,
                    display: 'flex'
                }}
                slideStyle={{
                    flex: 1,
                    display: 'flex',
                    minWidth: '100%'
                }}
                className="OfferList-SwipeViews">
                {
                    events.map(evt => (<EventOverview {...evt} />))
                }
                
            </SwipeableViews>
            <Button text="Book now" />

        </div>
    )
}
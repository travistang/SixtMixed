import React from 'react';
import { HereMap, Marker, Polyline, Polygon, Circle, Rectangle, PathFinder } from 'rc-here-maps';

const appId = "KXRCvuSB65cu38w7DCS5";
const appKey = "jmigwTkaN2pWzxHZypVMSQ";

export default function Map({
    startLocation,
    endLocation
}) {
    const centerOfMap = {
        lat: (startLocation.lat + endLocation.lat) / 2,
        lng: (startLocation.lng + endLocation.lng) / 2,
    }
    const [mapCenter, setMapCenter] = React.useState(centerOfMap)
    return (
        <div style={{flex: 3, width: '100vw', color: 'black'}}>
            <HereMap appId={appId} appCode={appKey} useHTTPS={false} center={mapCenter}>
                <Marker {...startLocation}>
                    Start
                </Marker>
                <Marker {...endLocation}>
                    End
                </Marker>
                <PathFinder 
                    waypoints={[startLocation, endLocation]}
                    style={{
                        lineWidth: 10,
                        strokeColor: "#ff5f00"
                    }}
                />
            </HereMap>
        </div>
    )
}
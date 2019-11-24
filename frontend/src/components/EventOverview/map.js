import React from 'react';
import { HereMap, Marker, Polyline, Polygon, Circle, Rectangle, PathFinder } from 'rc-here-maps';

const appId = "KXRCvuSB65cu38w7DCS5";
const appKey = "jmigwTkaN2pWzxHZypVMSQ";

export default function Map({
    useSixtMixed,
    startLocation,
    endLocation
}) {
    const centerOfMap = {
        lat: (startLocation.lat + endLocation.lat) / 2,
        lng: (startLocation.lng + endLocation.lng) / 2,
    }

    // functions for creating extra points
    const interpolate = (p1, p2, r) => {
        return {
            lat: p1.lat * r + p2.lat * (1 - r),
            lng: p1.lng * r + p2.lng * (1 - r),
        }
    }
    
    // combine results
    const waypoints = [
        startLocation,
        endLocation,
    ];
    
    const [mapCenter, setMapCenter] = React.useState(centerOfMap);
    return (
        <div style={{flex: 3, width: '100vw', color: 'black'}}>
            <HereMap 
                appId={appId} appCode={appKey} useHTTPS={false} 
                zoom={9}
                center={mapCenter}>
                <Marker {...startLocation}>
                    Start
                </Marker>
                <Marker {...endLocation}>
                    End
                </Marker>
                <PathFinder  
                    waypoints={waypoints}
                    style={{
                        lineWidth: 8,
                        strokeColor: "#ff5f00"
                    }}
                />
                
            </HereMap>
        </div>
    )
}
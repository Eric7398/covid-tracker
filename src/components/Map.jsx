import React from 'react'
import '../style/Map.css';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from '../utilities/util';


function Map({ center, zoom, countries, casesType }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    setMaxBounds={[[-90, -180], [90, 180]]}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div >
    )
}

export default Map

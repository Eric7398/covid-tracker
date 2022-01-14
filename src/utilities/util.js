import { Circle, Popup } from 'react-leaflet';
import numeral from "numeral";
import React from 'react';

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 200,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 200,
    },
    deaths: {
        hex: "#000000",
        multiplier: 500,
    },
};



// Sort data based on number of cases
export const sortData = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1);

}

// Format stats and add + if > 0 cases
export const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "0";

// Draw cirlces on map cased on cases with interactive tooltips
export const showDataOnMap = (data, casesType = 'cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.3}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >
            <Popup className="popup-wrapper">
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        <strong>Cases</strong><br />{numeral(country.cases).format("0,0")}
                    </div>
                    <div className="info-recovered">
                        <strong>Recovered</strong><br />{numeral(country.recovered).format("0,0")}
                    </div>
                    <div className="info-deaths">
                        <strong>Deaths</strong><br />{numeral(country.deaths).format("0,0")}
                    </div>
                </div>
            </Popup>
        </Circle>
    ))
)
import './App.css';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';

function App() {
  // "https://disease.sh/v3/covid-19/countries"
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2

          }));
          setCountries(countries);
        })
    }
    getCountriesData();
  }, []);
  // [] means the code will run once upon component load

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 TRACKER</h1>

        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value} key={country.id}>{country.name}</MenuItem>
            ))}
            {/* Loop through all the countries and show a drop list of the options */}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus cases" cases={1000} total={2000} />
        <InfoBox title="Recovered" cases={1000} total={2000} />
        <InfoBox title="Deaths" cases={1000} total={2000} />
        {/* InfoBoxes Covid cases*/}
        {/* InfoBoxes Covid Recoveries*/}
        {/* InfoBoxes */}
      </div>


      {/* Table */}

      {/* Map */}
    </div>
  );
}

export default App;

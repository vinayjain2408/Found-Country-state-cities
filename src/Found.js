

// import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [countrySelectValue, setCountrySelectValue] = useState("");
  const [stateSelectValue, setStateSelectValue] = useState("");
  const [citySelectValue, setCitySelectValue] = useState("");

  const config = {
    method: "get",
    url: "https://api.countrystatecity.in/v1/countries",
    headers: {
      "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
    }
  };

  function getCountries() {
    axios(config)
      .then(function (response) {
        // console.log(response.data);
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getStatesByCountry() {
    const config = {
      method: "get",
      url:
        "https://api.countrystatecity.in/v1/countries/" +
        countrySelectValue +
        "/states",
      headers: {
        "X-CSCAPI-KEY":
        "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setStates(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function getCitiesByStates() {
    const config = {
        method: "get",
        url: `https://api.countrystatecity.in/v1/countries/${countrySelectValue}/states/${stateSelectValue}/cities`,
        headers: {
          "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
        }
      };
      

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setCities(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (countrySelectValue.length > 0) getStatesByCountry();
  }, [countrySelectValue]);


  useEffect(() => {
  if (stateSelectValue.length > 0) getCitiesByStates();
}, [stateSelectValue]);



  return (
    <div className="App">
      <select
        onChange={(e) => setCountrySelectValue(e.target.value)}
        value={countrySelectValue}
      >
        <option value="" selected>
          Select Country
        </option>
        {countries.map((country) => {
          return (
            <option key={country.iso2} value={country.iso2}>
              {country.name}
            </option>
          );
        })}
      </select>

      <select
        value={stateSelectValue}
        onChange={(e) => setStateSelectValue(e.target.value)}
      >
        <option value="" selected>
          Select State
        </option>
        {states.map((state) => {
          return (
            <option key={state.id} value={state.iso2}>
              {state.name}
            </option>
          );
        })}
      </select>


      <select
        value={citySelectValue}
        onChange={(e) => setCitySelectValue(e.target.value)}
      >
        <option value="" selected>
          Select Cities
        </option>
        {cities.map((cities) => {
          return (
            <option key={cities.id} value={cities.iso2}>
              {cities.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

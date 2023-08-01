import React, { useState } from "react";
import { data } from "./Country";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); 
  const [submitText, setSubmitText] = useState(""); 

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedCity(""); 
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => { 
    setSelectedCity(event.target.value);
  };

  const handleSubmit =()=>{
    setSubmitText(selectedCountry  +selectedState + selectedCity)
  }

  return (
    <div className="App">
      <h1>Found Country, State & Cities</h1>
      <h2>Country:</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {data.countries.map((country1) => (
          <option key={country1.country_name} value={country1.country_name}>
            {country1.country_name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <h2>States:</h2>
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {data.states[selectedCountry]?.map((state1) => (
              <option key={state1.state_name} value={state1.state_name}>
                {state1.state_name}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedState && (
        <div>
          <h2>Cities:</h2>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {data.cities[selectedState]?.map((city) => (
              <option key={city.city_name} value={city.city_name}>
                {city.city_name}
              </option>
            ))}
          </select>
        </div>
      )}


      <button onClick={handleSubmit}>Submit</button>
      <p>{submitText}</p>
    </div>
  );
}

export default App;







 // c835cc5ca041fe27e25ee7994f3d8e8a



 // q3WO1aG8ZGIwSTqvk_9CsCW7a8r_Z2TQJ6ICwn76lFhpVcWxRYnII2hcE9c5JOkKGDk
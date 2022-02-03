import Hero from "./components/Hero";
import Title from "./components/Title";
import SearchField from "./components/SearchField";
import TextInput from "./components/TextInput";
import SearchButton from "./components/SearchButton";
import {useEffect, useState} from "react";
import Details from "./components/Details";
import Map from "./components/Map";
import {isIP} from "is-ip";

function App() {


    const [state, setState] = useState({
        ipAddress: '',
        ip: '',
        location: '',
        timezone: '',
        isp: '',
        latitude: 6.6745,
        longitude: -1.5716,
    });

    function handleTextChange(event) {
        const {name, value} = event.target;
        setState(oldState => ({
            ...oldState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        let url = '';
        if (isIP(state.ipAddress)) {
            url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_WXhaEhCq5xEXOMy3lPmEjXMKiTTAf&ipAddress=${state.ipAddress}`;
        } else {
            url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_WXhaEhCq5xEXOMy3lPmEjXMKiTTAf&domain=${state.ipAddress}`;
        }
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setState(oldState => ({
                    ...oldState,
                    ip: result.ip,
                    timezone: result.location.timezone,
                    isp: result.isp,
                    location: `${result.location.city}, ${result.location.region}, ${result.location.country}`,
                    latitude: result.location.lat,
                    longitude: result.location.lng
                }));
            });
    }

    useEffect(function () {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WXhaEhCq5xEXOMy3lPmEjXMKiTTAf`)
            .then(response => response.json())
            .then(result => {
                setState(oldState => ({
                    ...oldState,
                    ip: result.ip,
                    timezone: result.location.timezone,
                    isp: result.isp,
                    location: `${result.location.city}, ${result.location.region}, ${result.location.country}`,
                    latitude: result.location.lat,
                    longitude: result.location.lng
                }));
            });
    }, []);



  return (
    <div className="App">
        <Hero>
            <Title>IP Address Tracker</Title>
            <SearchField onSubmit={handleSubmit}>
                <TextInput type='text' placeholder='Search for any IP Address or domain' onChange={handleTextChange} value={state.ipAddress} name='ipAddress' />
                <SearchButton>▷</SearchButton>
            </SearchField>
        </Hero>
        <Details ip={state.ip} location={state.location} timezone={state.timezone} isp={state.isp}/>
        <Map latitude={state.latitude} longitude={state.longitude}/>
    </div>
  );
}

export default App;

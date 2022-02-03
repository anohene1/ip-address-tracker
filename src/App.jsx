import Hero from "./components/Hero";
import Title from "./components/Title";
import SearchField from "./components/SearchField";
import TextInput from "./components/TextInput";
import SearchButton from "./components/SearchButton";
import {useState} from "react";
import Details from "./components/Details";
import Map from "./components/Map";
import {TileLayer, MapContainer, Marker, Popup} from "react-leaflet";

function App() {

    const [ipAddress, setIpAddress] = useState();

    function handleTextChange(event) {
        setIpAddress(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(ipAddress);
    }



  return (
    <div className="App">
        <Hero>
            <Title>IP Address Tracker</Title>
            <SearchField onSubmit={handleSubmit}>
                <TextInput type='text' placeholder='Search for any IP Address or domain' onChange={handleTextChange} value={ipAddress} name='ipAddress' />
                <SearchButton>▷</SearchButton>
            </SearchField>
        </Hero>
        <Details/>
        <Map/>
    </div>
  );
}

export default App;

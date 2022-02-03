import styled from "styled-components";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const Container = styled.div`
  height: calc(100vh - 250px);
  background-color: rebeccapurple;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function MyComponent({longitude, latitude}) {
    const map = useMap();
    map.flyTo([latitude, longitude], 13);
    return null;
}

function Map({longitude, latitude}) {
    return (
        <Container>
            <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
                <MyComponent latitude={latitude} longitude={longitude} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default Map;
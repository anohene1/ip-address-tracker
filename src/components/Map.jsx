import styled from "styled-components";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Container = styled.div`
  height: calc(100vh - 250px);
  background-color: rebeccapurple;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Map({longitude, latitude}) {
    return (
        <Container>
            <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default Map;
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

import "./App.css";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function ClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng); // latlng = { lat, lng }
    },
  });
  return null;
}

function App() {
  const initialPosition = [0, 0];
  const initialZoom = 5;
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapClick = (latlng) => {
    setMarkerPosition([latlng.lat, latlng.lng]);
  };

  return (
    <div className="App">
      <div className="App-sidebar">
        <h2>GeezMap</h2>
        <p>Click on the map to add a marker!</p>
        <p>
          You can then customise it with your own name for it or another color.
        </p>
      </div>
      <MapContainer
        center={initialPosition}
        zoom={initialZoom}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler onMapClick={handleMapClick} />

        <Marker position={initialPosition}>
          <Popup>
            Default Marker <br />
            Latitude: {initialPosition[0]}, Longitude: {initialPosition[1]}
          </Popup>
        </Marker>

        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              <input placeholder="Your marker!"></input> <br />
              <input type="color" defaultValue="#ff0000" /> <br />
              Latitude: {markerPosition[0].toFixed(4)}, Longitude:{" "}
              {markerPosition[1].toFixed(4)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default App;

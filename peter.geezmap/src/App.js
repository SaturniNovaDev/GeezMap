import "./App.css";
import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "./media/marker-iconx32.png";

import {
  Slider,
  Sketch,
  Material,
  Colorful,
  Compact,
  Circle,
  Wheel,
  Block,
  Github,
  Chrome,
} from "@uiw/react-color";
import {
  Alpha,
  Hue,
  ShadeSlider,
  Saturation,
  Interactive,
  hsvaToHslaString,
} from "@uiw/react-color";
import {
  EditableInput,
  EditableInputRGBA,
  EditableInputHSLA,
} from "@uiw/react-color";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [42, 42],
  iconAnchor: [12, 42],
  popupAnchor: [9, -23],
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
  const [hex, setHex] = useState("");

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
          <Marker position={markerPosition} id="custom_marker">
            <Popup id="custom_marker_popup">
              Customize your marker! <br />
              <input
                name="custom_marker_name"
                id="custom_marker_name"
                placeholder="Your marker!"
                style={{
                  marginBlock: "10px",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: `2px solid ${hex}`,
                  backgroundColor: "#eee",
                }}
              ></input>
              <Circle
                id="color_picker"
                colors={[
                  "#f57e90",
                  "#ffadad",
                  "#ffd6a5",
                  "#fbfea0",
                  "#caffbf",
                  "#95cf92",
                  "#9bf6ff",
                  "#a0c4ff",
                  "#6cc6f3",
                  "#bdb2ff",
                  "#ff9ed7",
                ]}
                color={hex}
                onChange={(color) => {
                  setHex(color.hex);
                }}
              />
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

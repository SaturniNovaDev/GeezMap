import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // ¡Importante! Estilos base de Leaflet

// Nota: Leaflet a veces tiene problemas para encontrar los íconos de marcador.
// Esta es una solución común en React:
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// Fin de la solución de íconos.

function MapaEventos() {
    // 1. Define la ubicación central inicial del mapa
    const posicionInicial = [40.4167, -3.7038]; // Ejemplo: Madrid
    const zoomInicial = 5;

    return (
        // MapContainer es el contenedor principal del mapa.
        <MapContainer 
            center={posicionInicial} 
            zoom={zoomInicial} 
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100%' }} // Debes darle un tamaño explícito
        >
            {/* 2. TileLayer carga las imágenes del mapa (las "teselas" o "tiles") */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Esta es la URL estándar de OSM
            />

            {/* 3. Marcador de Ejemplo */}
            <Marker position={posicionInicial}>
                <Popup>
                    ¡Mi evento guardado! <br /> Latitud: {posicionInicial[0]}, Longitud: {posicionInicial[1]}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapaEventos;

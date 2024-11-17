import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ location }) => {
  const { lat, lng } = location || { lat: 0, lng: 0 }; // Default location if none provided

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {lat && lng && (
          <Marker position={[lat, lng]}>
            <Popup>
              Latitude: {lat}, Longitude: {lng}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;

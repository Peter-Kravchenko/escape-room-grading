import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { officeIconConfig } from '../../const';

const officeViewCoords: [number, number] = [59.968, 30.317];

const icon = new Icon({
  iconUrl: officeIconConfig.url,
  iconSize: [officeIconConfig.width, officeIconConfig.height],
  iconAnchor: [officeIconConfig.anchorX, officeIconConfig.anchorY],
});

function MapContacts(): JSX.Element {
  return (
    <div className="map-contacts">
      <div className="map">
        <MapContainer
          className="map container"
          center={officeViewCoords}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[59.9682, 30.3173]} icon={icon}>
            <Tooltip>
              Санкт-Петербург, <br /> Набережная реки Карповка, д 5П.
            </Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapContacts;

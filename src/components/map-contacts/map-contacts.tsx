import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// function createIcon(config: IconConfig) {
//   return new Icon({
//     iconUrl: config.url,
//     iconSize: [config.width, config.height],
//     iconAnchor: [config.anchorX, config.anchorY],
//   });
// }

const defaultIconConfig: IconConfig = {
  url: '/img/content/svg/pin-default.svg',
  width: 40,
  height: 55,
  anchorX: 14,
  anchorY: 40,
};

const activeIconConfig: IconConfig = {
  url: '/img/content/svg/pin-active.svg',
  width: 40,
  height: 55,
  anchorX: 14,
  anchorY: 40,
};

const officeLocation: [number, number] = [59.968, 30.317];

const icon = new Icon({
  iconUrl: 'public/img/svg/pin-active.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

function MapContacts(): JSX.Element {
  return (
    <div className="map-contacts">
      <div className="map">
        <MapContainer
          className="map container"
          center={officeLocation}
          zoom={16}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[59.9682, 30.3173]} icon={icon}>
            <Popup>
              Санкт-Петербург, <br /> Набережная реки Карповка, д 5П.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapContacts;

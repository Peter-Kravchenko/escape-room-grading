import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { COPYRIGHT, TILE_LAYER, officeIconConfig } from '../../const';

const OFFICE_VIEW_ZOOM = 16;
const officeViewCoords: [number, number] = [59.968, 30.317];
const markerPositionCoords: [number, number] = [59.9682, 30.3173];

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
          zoom={OFFICE_VIEW_ZOOM}
          scrollWheelZoom={false}
        >
          <TileLayer attribution={COPYRIGHT} url={TILE_LAYER} />
          <Marker position={markerPositionCoords} icon={icon}>
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

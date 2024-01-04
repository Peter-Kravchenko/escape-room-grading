import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TQuestBookings } from '../../types/booking';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedLocation } from '../../store/quests-data/quests-data.selectors';
import { setSelectedLocation } from '../../store/quests-data/quests-data.slice';

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

const officeLocation: [number, number] = [59.93, 30.31];

const activeIcon = new Icon({
  iconUrl: 'public/img/svg/pin-active.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const defaultIcon = new Icon({
  iconUrl: 'public/img/svg/pin-default.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

type MapBookingProps = {
  questLocations: TQuestBookings;
};

function MapBooking({ questLocations }: MapBookingProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector(getSelectedLocation);

  return (
    <>
      <div className="booking-map">
        <div className="map">
          <MapContainer
            className="map__container"
            center={officeLocation}
            zoom={10}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {questLocations &&
              questLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.location.coords}
                  icon={
                    selectedLocation && selectedLocation?.id === location.id
                      ? activeIcon
                      : defaultIcon
                  }
                  eventHandlers={{
                    click: () => {
                      dispatch(setSelectedLocation(location));
                    },
                  }}
                >
                  <Tooltip>{location.location.address}</Tooltip>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
      <p className="booking-map__address">
        Вы&nbsp;выбрали: {selectedLocation?.location.address}
      </p>
    </>
  );
}

export default MapBooking;

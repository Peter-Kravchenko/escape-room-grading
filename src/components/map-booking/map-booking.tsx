import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TQuestBookings } from '../../types/booking';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedLocation } from '../../store/quests-data/quests-data.selectors';
import { setSelectedLocation } from '../../store/quests-data/quests-data.slice';
import {
  COPYRIGHT,
  TILE_LAYER,
  activeIconConfig,
  defaultIconConfig,
} from '../../const';

const QUEST_VIEW_ZOOM = 10;
const questsViewCoords: [number, number] = [59.93, 30.31];

const activeIcon = new Icon({
  iconUrl: activeIconConfig.url,
  iconSize: [activeIconConfig.width, activeIconConfig.height],
  iconAnchor: [activeIconConfig.anchorX, activeIconConfig.anchorY],
});

const defaultIcon = new Icon({
  iconUrl: defaultIconConfig.url,
  iconSize: [defaultIconConfig.width, defaultIconConfig.height],
  iconAnchor: [defaultIconConfig.anchorX, defaultIconConfig.anchorY],
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
            center={questsViewCoords}
            zoom={QUEST_VIEW_ZOOM}
            scrollWheelZoom={false}
          >
            <TileLayer attribution={COPYRIGHT} url={TILE_LAYER} />

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

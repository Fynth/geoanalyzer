//import GeoJSONMap from './GeoJSONMap';
//import GeoJSONImport from './GeoJSONImport';

import MapComponent from './MapComponent';
import Layers from './Layers';

const VisulSait = () => {
  return (
    <div>
      <MapComponent>
        <Layers />
      </MapComponent>
    </div>
  );
}

export default VisulSait;
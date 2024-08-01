import React, { useState } from 'react';
import GeoJSONMap from './GeoJSONMap';
import GeoJSONImport from './GeoJSONImport';
import MapComponent from './MapComponent';
import Layers from './Layers';

const VisulSait = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);

  const handleImport = (content) => {
    setGeoJsonData(content);
  };

  return (
    <div>
      <MapComponent>
        <Layers geoJsonData={geoJsonData} />
        <GeoJSONImport onImport={handleImport} />
      </MapComponent>
    </div>
  );
}

export default VisulSait;
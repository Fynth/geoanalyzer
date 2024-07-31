import React, { useState, useEffect } from 'react';
import { Source, Layer } from 'react-map-gl';

const GeoJSONLayer = ({ geoJsonUrl }) => {
  const [geojson, setGeojson] = useState(null);

  useEffect(() => {
    const loadGeoJsonFile = async () => {
      const response = await fetch(geoJsonUrl);
      const data = await response.json();
      setGeojson(data);
    };

    loadGeoJsonFile();
  }, [geoJsonUrl]);

  return (
    <>
      {geojson && (
        <Source type="geojson" data={geojson}>
          <Layer
            id="geojson-layer"
            type="fill"
            paint={{
              'fill-color': '#0080ff',
              'fill-opacity': 0.5
            }}
          />
        </Source>
      )}
    </>
  );
};

export default GeoJSONLayer;
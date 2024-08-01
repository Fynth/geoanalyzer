// Ваш код для отображения GeoJSON данных на карте
import React from 'react';

const GeoJSONMap = ({ geoJsonData }) => {
  // Ваш код для отображения GeoJSON данных на карте
  return (
    <div>
      {geoJsonData ? (
        <pre>{JSON.stringify(geoJsonData, null, 2)}</pre>
      ) : (
        <p>No data loaded</p>
      )}
    </div>
  );
};

export default GeoJSONMap;
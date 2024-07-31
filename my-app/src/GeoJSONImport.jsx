
import React from 'react';

const GeoJSONImport = ({ onImport, onExport }) => {
  return (
    <div>
      <h2>Импорт/Экспорт данных</h2>
      <input type="file" accept=".geojson" onChange={onImport} />
      <button onClick={onExport}>Экспорт данных</button>
    </div>
  );
};

export default GeoJSONImport;
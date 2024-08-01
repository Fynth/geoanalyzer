import React, { useState } from 'react';
import './GeoJSONImport.css';

const GeoJSONImport = ({ onImport }) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        if (typeof onImport === 'function') {
          onImport(content);
        }
        setLoading(false);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="geojson-import-container">
      <h2>Импорт векторных данных</h2>
      <input type="file" accept=".geojson" onChange={handleFileChange} />
      <button onClick={() => setLoading(true)} disabled={loading}>
        {loading ? 'Загрузка...' : 'Импорт данных'}
      </button>
    </div>
  );
};

export default GeoJSONImport;
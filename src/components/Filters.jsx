export default function Filters({ countries, cities, offices, selectedCountry, selectedCity, selectedOffice, onCountryChange, onCityChange, onOfficeChange }) {
  return (
    <div className="flex gap-4 mb-6">
      <select value={selectedCountry} onChange={onCountryChange} className="border rounded p-2">
        <option value="0">Todos los países</option>
        {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <select value={selectedCity} onChange={onCityChange} className="border rounded p-2">
        <option value="0">Todas las ciudades</option>
        {cities.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <select value={selectedOffice} onChange={onOfficeChange} className="border rounded p-2">
        <option value="0">Todas las oficinas</option>
        {offices.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
      </select>
    </div>
  );
}

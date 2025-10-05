export default function Filters({
  countries,
  cities,
  offices,
  selectedCountry,
  selectedCity,
  selectedOffice,
  onCountryChange,
  onCityChange,
  onOfficeChange
}) {
  const filteredCities = selectedCountry === "Todos"
    ? cities
    : cities.filter(c => c.countryId === selectedCountry);

  const filteredOffices = selectedCity === "Todos"
    ? offices
    : offices.filter(o => o.cityId === selectedCity);

  return (
    <div className="flex gap-4 mb-6">
      <select value={selectedCountry} onChange={onCountryChange} className="border p-2 rounded">
        <option value="Todos">Todos los países</option>
        {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <select value={selectedCity} onChange={onCityChange} className="border p-2 rounded">
        <option value="Todos">Todas las ciudades</option>
        {filteredCities.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <select value={selectedOffice} onChange={onOfficeChange} className="border p-2 rounded">
        <option value="Todos">Todas las oficinas</option>
        {filteredOffices.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
      </select>
    </div>
  );
}
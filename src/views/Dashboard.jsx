import { useEffect, useState } from "react";
import { dataService } from "../services/dataService";
import Filters from "../components/Filter";
import KPIs from "../components/KPIS";
import SalesBarChart from "../components/SalesBarChart";
import SalesLineChart from "../components/SalesLineChart";
import SalesPieChart from "../components/SalesPieChart";
import SalesTable from "../components/SalesTable";

export default function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [offices, setOffices] = useState([]);
  const [sales, setSales] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Todos");
  const [selectedCity, setSelectedCity] = useState("Todos");
  const [selectedOffice, setSelectedOffice] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const cs = await dataService.getCountries();
        const ci = await dataService.getCities();
        const os = await dataService.getOffices();
        const sl = await dataService.getSales();
        setCountries(cs);
        setCities(ci);
        setOffices(os);
        setSales(sl);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredCities = selectedCountry === "Todos" ? cities : cities.filter(c => c.countryId === selectedCountry);
  const filteredOffices = selectedCity === "Todos" ? offices : offices.filter(o => o.cityId === selectedCity);
  const filteredSales = selectedOffice === "Todos"
    ? sales.filter(s => filteredOffices.some(o => o.id === s.officeId))
    : sales.filter(s => s.officeId === selectedOffice);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Filters
        countries={countries}
        cities={filteredCities}
        offices={filteredOffices}
        selectedCountry={selectedCountry}
        selectedCity={selectedCity}
        selectedOffice={selectedOffice}
        onCountryChange={e => { setSelectedCountry(Number(e.target.value)); setSelectedCity("Todos"); setSelectedOffice("Todos"); }}
        onCityChange={e => { setSelectedCity(Number(e.target.value)); setSelectedOffice("Todos"); }}
        onOfficeChange={e => setSelectedOffice(Number(e.target.value))}
      />

      <KPIs sales={filteredSales} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SalesBarChart sales={filteredSales} offices={filteredOffices} />
        <SalesLineChart sales={filteredSales} />
        <SalesPieChart sales={filteredSales} countries={countries} cities={filteredCities} offices={filteredOffices} />
      </div>

      <SalesTable sales={filteredSales} offices={filteredOffices} />
    </div>
  );
}

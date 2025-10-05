import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import KPIs from "../components/KPIS";
import Filters from "../components/Filters";
import SalesBarChart from "../components/SalesBarChart";
import SalesLineChart from "../components/SalesLineChart";
import SalesDoughnutChart from "../components/SalesDoughbuChart";
import SalesPieChart from "../components/SalesPieChart";
import SalesTable from "../components/SalesTable";
import { dataService } from "../services/dataService";

export default function Dashboard() {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [offices, setOffices] = useState([]);
    const [sales, setSales] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);
    const [selectedOffice, setSelectedOffice] = useState(0);
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
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const filteredCities = selectedCountry === 0 ? cities : cities.filter(c => c.countryId === selectedCountry);
    const filteredOffices = selectedCity === 0 ? offices : offices.filter(o => o.cityId === selectedCity);
    const filteredSales = selectedOffice === 0
        ? sales.filter(s => filteredOffices.some(o => o.id === s.officeId))
        : sales.filter(s => s.officeId === selectedOffice);

    if (loading) return <p className="text-center mt-20">Cargando...</p>;
    if (error) return <p className="text-red-500 text-center mt-20">{error}</p>;

    return (
        <div className="flex min-h-screen w-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Topbar />

                <main className="p-6 space-y-6 flex-1 " >
                    {/* Filtros */}
                    <Filters
                        countries={countries}
                        cities={filteredCities}
                        offices={filteredOffices}
                        selectedCountry={selectedCountry}
                        selectedCity={selectedCity}
                        selectedOffice={selectedOffice}
                        onCountryChange={(e) => {
                            setSelectedCountry(Number(e.target.value));
                            setSelectedCity(0);
                            setSelectedOffice(0);
                        }}
                        onCityChange={(e) => {
                            setSelectedCity(Number(e.target.value));
                            setSelectedOffice(0);
                        }}
                        onOfficeChange={(e) => setSelectedOffice(Number(e.target.value))}
                    />

                    {/* KPIs */}
                    <KPIs sales={filteredSales} />

                    {/* Gráficas principales */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(74,207,118,0.5)] hover:shadow-lg transition">
                            <h2 className="font-semibold text-gray-700 mb-3">
                                Ventas por Oficina
                            </h2>
                            <SalesBarChart sales={filteredSales} offices={filteredOffices} />
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(74,207,118,0.5)] hover:shadow-lg transition">
                            <h2 className="font-semibold text-gray-700 mb-3">
                                Ventas Mensuales
                            </h2>
                            <SalesLineChart sales={filteredSales} />
                        </div>
                    </div>

                    {/* Gráficas secundarias */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(74,207,118,0.5)] hover:shadow-lg transition w-full ">
                            <h2 className="font-semibold text-gray-700 mb-3">
                                Distribución de Ventas por Ciudad
                            </h2>
                            <SalesDoughnutChart
                                sales={filteredSales}
                                cities={filteredCities}
                                offices={filteredOffices}

                            />
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(74,207,118,0.5)] hover:shadow-lg transition w-full ">
                            <h2 className="font-semibold text-gray-700 mb-3">
                                Ventas por País
                            </h2>
                            <SalesPieChart
                                sales={filteredSales}
                                countries={countries}
                                offices={filteredOffices}
                                cities={filteredCities}
                            />
                        </div>

                        {/* Tabla resumen */}
                        <div className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(74,207,118,0.5)] hover:shadow-lg transition  max-h-[500px] overflow-auto">
                            <SalesTable sales={filteredSales} offices={filteredOffices} />
                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}

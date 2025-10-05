import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SalesPieChart({ sales, countries, cities, offices }) {
const countrySales = countries.map(c => {
  // Primero obtener las ciudades de ese país
  const countryCities = cities.filter(city => city.countryId === c.id).map(city => city.id);

  // Luego obtener las oficinas dentro de esas ciudades
  const countryOffices = offices.filter(o => countryCities.includes(o.cityId)).map(o => o.id);

  // Finalmente sumar las ventas de esas oficinas
  return sales
    .filter(s => countryOffices.includes(s.officeId))
    .reduce((acc, cur) => acc + cur.amount, 0);
});
  const data = {
    labels: countries.map(c => c.name),
    datasets: [{
      label: "Ventas por país",
      data: countrySales,
      backgroundColor: [
        "#4ACF76", "#3B82F6", "#F59E0B", "#F97316"
      ],
      borderWidth: 1,
      hoverOffset: 20
    }]
  };

  return <Pie data={data} options={{ responsive: true }} />;
}
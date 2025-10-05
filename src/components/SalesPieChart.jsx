import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
export default function SalesPieChart({ sales, countries, cities, offices }) {
  const data = {
    labels: countries.map(c => c.name),
    datasets: [{
      label: "Ventas por país",
      data: countries.map(c => {
        const cityIds = cities.filter(ci => ci.countryId === c.id).map(ci => ci.id);
        const officeIds = offices.filter(o => cityIds.includes(o.cityId)).map(o => o.id);
        return sales.filter(s => officeIds.includes(s.officeId))
                    .reduce((a, b) => a + b.amount, 0);
      }),
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
    }]
  };
  const options = { responsive: true, plugins: { legend: { position: "bottom" } } };
  return <Pie data={data} options={options} />;
}

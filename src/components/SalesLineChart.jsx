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
export default function SalesLineChart({ sales }) {
  const months = [...new Set(sales.map(s => s.month))];
  const data = {
    labels: months,
    datasets: [{
      label: "Ventas Mensuales",
      data: months.map(m =>
        sales.filter(s => s.month === m).reduce((a, b) => a + b.amount, 0)
      ),
      borderColor: "rgba(16, 185, 129, 0.8)",
      backgroundColor: "rgba(16, 185, 129, 0.3)",
      tension: 0.4,
    }]
  };
  const options = { responsive: true, plugins: { legend: { display: true } } };
  return <Line data={data} options={options} />;
}

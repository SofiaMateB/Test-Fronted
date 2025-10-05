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
export default function SalesBarChart({ sales, offices }) {
  const data = {
    labels: offices.map(o => o.name),
    datasets: [{
      label: "Ventas",
      data: offices.map(o =>
        sales.filter(s => s.officeId === o.id).reduce((a, b) => a + b.amount, 0)
      ),
      backgroundColor: "rgba(59, 130, 246, 0.7)"
    }]
  };

  const options = { responsive: true, plugins: { legend: { display: true } } };
  return <Bar data={data} options={options} />;
}

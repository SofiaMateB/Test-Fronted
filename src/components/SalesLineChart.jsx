import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function SalesLineChart({ sales }) {
  const months = [...new Set(sales.map(s => s.month))].sort();
  const data = {
    labels: months,
    datasets: [{
      label: "Ventas",
      data: months.map(m => sales.filter(s => s.month === m).reduce((acc, cur) => acc + cur.amount, 0)),
      borderColor: "#4ACF76",
      backgroundColor: "rgba(74, 207, 118, 0.5)",
      fill: true,
      tension: 0.3
    }]
  };

  return <Line data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
}
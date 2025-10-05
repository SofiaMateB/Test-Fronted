import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SalesBarChart({ sales, offices }) {
  const labels = offices.map((o) => o.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data: offices.map((office) =>
          sales
            .filter((s) => s.officeId === office.id)
            .reduce((acc, s) => acc + s.amount, 0)
        ),
        backgroundColor: "#4ACF76",
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
}

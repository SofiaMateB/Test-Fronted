import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SalesDoughnutChart({ sales, cities, offices}) {
  const citySales = cities.map(c => sales.filter(s => offices.some(o => o.id === s.officeId && o.cityId === c.id)).reduce((acc, cur) => acc + cur.amount, 0));
  const data = {
    labels: cities.map(c => c.name),
    datasets: [{
      label: "Ventas por ciudad",
      data: citySales,
      backgroundColor: ["#4ACF76", "#3B82F6", "#F59E0B", "#F97316"],
      hoverOffset: 20
    }]
  };

  return <Doughnut data={data} options={{ responsive: true }}  />;
}

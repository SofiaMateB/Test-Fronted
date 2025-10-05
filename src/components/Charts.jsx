export function SalesLineChart({ sales }) {
  const months = [...new Set(sales.map(s => s.month))].sort();
  const data = {
    labels: months,
    datasets: [
      {
        label: "Ventas por mes",
        data: months.map(m => sales.filter(s => s.month===m).reduce((a,b)=>a+b.amount,0)),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
        tension: 0.3
      }
    ]
  };
  return <Line data={data} />;
}

export function SalesPieChart({ sales, countries, cities, offices }) {
  const countrySales = countries.map(c => {
    const citiesInCountry = cities.filter(city => city.countryId === c.id);
    const officesInCountry = offices.filter(o => citiesInCountry.some(ci => ci.id===o.cityId));
    const total = sales.filter(s => officesInCountry.some(o=>o.id===s.officeId))
      .reduce((acc, s)=>acc+s.amount,0);
    return total;
  });

  const data = {
    labels: countries.map(c=>c.name),
    datasets:[{
      data: countrySales,
      backgroundColor: ["#FF6384","#36A2EB","#FFCE56","#4BC0C0"],
    }]
  };

  return <Pie data={data} />;
}
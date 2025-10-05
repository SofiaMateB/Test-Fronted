export default function KPIs({ sales }) {
const totalSales = sales.reduce((acc, s) => acc + s.amount, 0);
  const totalTransactions = sales.length;
  const averageSale = totalTransactions ? (totalSales / totalTransactions).toFixed(2) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 font-semibold mb-2">Total Ventas</h3>
        <p className="text-3xl font-bold text-green-600">{totalSales}</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 font-semibold mb-2">Oficinas</h3>
        <p className="text-3xl font-bold text-blue-600">{totalTransactions}</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-gray-500 font-semibold mb-2">Promedio por Oficina</h3>
        <p className="text-3xl font-bold text-yellow-500">{averageSale}</p>
      </div>
    </div>
  );
}

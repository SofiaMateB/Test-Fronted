export default function SalesTable({ sales, offices }) {
  return (
  <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
  <h2 className="text-lg font-semibold mb-4">Resumen de Ventas</h2>
  <table className="min-w-full divide-y divide-gray-200 table-" >
    <thead className="bg-gray-100">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oficina</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ventas</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {sales.map((s, index) => (
        <tr key={index} className="hover:bg-gray-50 transition">
          <td className="px-6 py-4 whitespace-nowrap">{offices.find(o => o.id === s.officeId)?.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{s.month}</td>
          <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-700">${s.amount.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}

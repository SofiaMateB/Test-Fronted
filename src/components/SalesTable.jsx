export default function SalesTable({ sales, offices }) {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Oficina</th>
          <th className="border p-2">Mes</th>
          <th className="border p-2">Monto</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(s => {
          const office = offices.find(o=>o.id===s.officeId);
          return (
            <tr key={s.id}>
              <td className="border p-2">{office?.name || "N/A"}</td>
              <td className="border p-2">{s.month}</td>
              <td className="border p-2">${s.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

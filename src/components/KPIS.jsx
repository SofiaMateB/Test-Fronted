export default function KPIs({ sales }) {
const totalSales = sales.reduce((acc, s) => acc + s.amount, 0);
  const totalTransactions = sales.length;
  const totalOffices = [...new Set(sales.map(s => s.officeId))].length;
  const averageSale = totalTransactions ? (totalSales / totalTransactions).toFixed(2) : 0;
 const formatNumber = (num) => {
    return num.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-[0_4px_12px_rgba(74,207,118,0.3)] flex items-center justify-between">
        <div>
          <dt className="text-2xl font-bold text-[#007A33]">{formatNumber(totalSales)}</dt>
          <dd className="text-sm font-medium  text-[#007A33]">Total Ventas</dd>
        </div>
        <svg className="w-6 h-6 text-[#007A33]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      
        <div className="bg-white rounded-xl p-4 shadow-[0_4px_12px_rgba(74,207,118,0.3)] flex items-center justify-between">
        <div>
          <dt className="text-2xl font-bold text-[#007A33]">{totalOffices}</dt>
          <dd className="text-sm font-medium text-[#007A33]">Oficinas Activas</dd>
        </div>
        <svg className="w-6 h-6 text-[#4ACF76]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    <div className="bg-white rounded-xl p-4 shadow-[0_4px_12px_rgba(255,165,0,0.3)] flex items-center justify-between">
        <div>
          <dt className="text-2xl font-bold text-[#FF8C00]">{formatNumber(averageSale)}</dt>
          <dd className="text-sm font-medium text-[#FFA500]">Promedio por Oficina</dd>
        </div>
        <svg className="w-6 h-6 text-[#FFA500]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M288 192C288 139 245 96 192 96C139 96 96 139 96 192C96 245 139 288 192 288C245 288 288 245 288 192zM544 448C544 395 501 352 448 352C395 352 352 395 352 448C352 501 395 544 448 544C501 544 544 501 544 448zM534.6 150.6C547.1 138.1 547.1 117.8 534.6 105.3C522.1 92.8 501.8 92.8 489.3 105.3L105.3 489.3C92.8 501.8 92.8 522.1 105.3 534.6C117.8 547.1 138.1 547.1 150.6 534.6L534.6 150.6z"/>
        </svg>
      </div>
    </div>
    
  );
}

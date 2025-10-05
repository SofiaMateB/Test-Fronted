import { useState } from "react";
import { FaHome, FaChartBar, FaUsers, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard" },
    { icon: <FaChartBar />, label: "Gráficas" },
    { icon: <FaUsers />, label: "Usuarios" },
  ];

  return (
    <div className={`bg-gray-100 text-gray-800 h-screen transition-all duration-300
      ${collapsed ? "w-20" : "w-64"} flex flex-col`}>
      
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        {!collapsed &&  <img
                  src="https://www.ikusi.com/wp-content/uploads/2025/05/logo-ikusi-01.svg"
                  alt="Ikusi Logo"
                  className="h-12 relative"
                />}
        <button
          onClick={toggleSidebar}
          className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full transition"
        >
          {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-gray-200 cursor-pointer transition-colors rounded-md mx-2 my-1"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}

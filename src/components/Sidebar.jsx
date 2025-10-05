import { useState } from "react";
import { FaHome, FaChartBar, FaUsers, FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard" },
  ];

  return (
<div
  className={` transition-all duration-300 ${collapsed ? "w-20" : "w-64"} flex flex-col
              bg-gradient-to-b from-white to-[#BFFFC4]`}
>
      {/* Logo y botón */}
      <div className="flex items-center justify-between p-4 border-b border-[rgb(220,225,230)]">
        {!collapsed && (
          <img
            src="https://www.ikusi.com/wp-content/uploads/2025/05/logo-ikusi-01.svg"
            alt="Ikusi Logo"
            className="h-12"
          />
        )}
        <button
          onClick={toggleSidebar}
          className="bg-[rgb(230,233,237)] hover:bg-[rgb(210,215,220)] p-2 rounded-full transition"
        >
          {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
      </div>

      {/* Menú */}
      <nav className="flex-1 mt-4 h-full">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-md mx-2 my-1 cursor-pointer
            transition-colors hover:bg-[rgb(220,230,240)] hover:text-[rgb(0,120,51)]"
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}

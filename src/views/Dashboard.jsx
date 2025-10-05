import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users") // o la ruta a tu db.json si usas json-server
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Usuarios</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 border-b">
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
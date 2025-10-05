import { useNavigate } from "react-router-dom";

export default function Topbar({ username = "Usuario" }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpiar almacenamiento local o contexto de usuario
        localStorage.removeItem("Usuario");
        // Redirigir al login
        navigate("/login");
    };
    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-md  bg-gradient-to-r from-white to-[#c3f8f8]"  >
            <h2 className="text-lg font-semibold text-gray-800">Bienvenido Usario, {localStorage.getItem('Usuario')}</h2>
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#13442c]">Administrador</span>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                />
                <button onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-1 bg-green-500 hover:bg-red-600 text-white rounded transition"
                >
                    Salir
                </button>
            </div>
            {/* Botón de salir */}

        </div>
    );
}

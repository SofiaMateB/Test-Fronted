export default function Topbar({ username = "Usuario" }) {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-gray-800">Bienvenido, {username}</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">Administrador</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}

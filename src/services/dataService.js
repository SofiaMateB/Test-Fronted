const API_URL = "http://localhost:3001";

export const dataService = {
  async getCountries() {
    const res = await fetch(`${API_URL}/countries`);
    if (!res.ok) throw new Error("Error al obtener países");
    return res.json();
  },

  async getCities() {
    const res = await fetch(`${API_URL}/cities`);
    if (!res.ok) throw new Error("Error al obtener ciudades");
    return res.json();
  },

  async getOffices() {
    const res = await fetch(`${API_URL}/offices`);
    if (!res.ok) throw new Error("Error al obtener oficinas");
    return res.json();
  },

  async getSales () {
    const res = await fetch(`${API_URL}/sales`);
    if (!res.ok) throw new Error("Error al obtener ventas");
    return res.json();
  }
};
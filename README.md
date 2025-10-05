# Dashboard Ikusi - Frontend React

Este proyecto es un **dashboard interactivo** desarrollado con **React** y **Tailwind CSS** que permite visualizar indicadores de ventas jerárquicamente (País > Ciudad > Oficina) usando **JSON Server** como backend simulado

## 🚀 Tecnologías

- React 19
- Tailwind CSS
- React Router v6
- Chart.js
- React Icons
- JSON Server (simulación de API REST)
## ⚡ Funcionalidades

- Login seguro con almacenamiento local de usuario.
- Dashboard con KPIs, filtros jerárquicos y gráficos interactivos:
  - **Bar Chart** → Ventas por oficina.
  - **Line Chart** → Ventas mensuales.
  - **Pie Chart** → Ventas por país/ciudad.
  - **Doughnut Chart** → Distribución de ventas por ciudad.
- Tabla resumen de ventas.

## 💾 Instalación

1. Clonar el repositorio:

git clone https://github.com/SofiaMateB/Test-Fronted.git

2. Instalar dependencias:

npm install

3. Ejecutar JSON Server:

npx json-server --watch db.json --port 3001

4. Ejecutar la app React:

npm run dev

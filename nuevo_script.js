// Coordenadas aproximadas para centrar el mapa (puedes ajustarlas)
var map = L.map('map').setView([19.6729569, -99.0870913], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Datos © OpenStreetMap',
  maxZoom: 19
}).addTo(map);

// Zonas de calor (datos de ejemplo, puedes reemplazarlos con datos reales)
var reportes = [
  [19.67295, -99.08709, 0.9], // Baños
  [19.67297, -99.08712, 0.8], // Pasillos
  [19.67293, -99.08705, 0.7], // Patio
  [19.67299, -99.08700, 0.6], // Cafetería
  [19.67300, -99.08710, 0.4], // Biblioteca
  [19.67292, -99.08708, 0.3], // Cancha
  [19.67288, -99.08715, 0.5], // Estacionamiento
  [19.67290, -99.08702, 0.6], // Entrada principal
  [19.67302, -99.08705, 0.7], // Laboratorio
  [19.67304, -99.08712, 0.8], // Dirección
  [19.67286, -99.08710, 0.5]  // Talleres
];

L.heatLayer(reportes, {
  radius: 25,
  blur: 15,
  maxZoom: 17,
  gradient: { 0.3: 'lime', 0.6: 'yellow', 0.9: 'red' }
}).addTo(map);

// Aquí puedes agregar más interactividad o funciones si lo necesitas en el futuro.
// Por ejemplo, podrías conectar el mapa con la tabla de reportes.
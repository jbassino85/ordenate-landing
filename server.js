const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Política de privacidad
app.get('/privacidad', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacidad.html'));
});

// Fallback para cualquier otra ruta
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ordenate Landing running on port ${PORT}`);
});

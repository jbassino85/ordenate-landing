const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Variables de entorno
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || '56XXXXXXXXX';
const PORT = process.env.PORT || 3000;

// Función para servir HTML con el número de WhatsApp dinámico
function serveHtmlWithWhatsApp(filePath, res) {
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error loading page');
    }
    // Reemplazar el placeholder con el número de WhatsApp real
    const processedHtml = html.replace(/56XXXXXXXXX/g, WHATSAPP_NUMBER);
    res.type('html').send(processedHtml);
  });
}

// Servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static('public', {
  index: false // No servir index.html automáticamente
}));

// Ruta principal
app.get('/', (req, res) => {
  serveHtmlWithWhatsApp(path.join(__dirname, 'public', 'index.html'), res);
});

// Política de privacidad
app.get('/privacidad', (req, res) => {
  serveHtmlWithWhatsApp(path.join(__dirname, 'public', 'privacidad.html'), res);
});

// Fallback para cualquier otra ruta
app.get('*', (req, res) => {
  serveHtmlWithWhatsApp(path.join(__dirname, 'public', 'index.html'), res);
});

app.listen(PORT, () => {
  console.log(`Ordenate Landing running on port ${PORT}`);
  console.log(`WhatsApp number configured: ${WHATSAPP_NUMBER}`);
});

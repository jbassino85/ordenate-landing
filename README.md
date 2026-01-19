# 💰 Ordenate Landing

Landing page para Ordenate - Asistente financiero personal por WhatsApp.

## 🚀 Stack

- **Node.js + Express** - Servidor web
- **Tailwind CSS** (CDN) - Estilos
- **Railway** - Hosting

## 📁 Estructura

```
ordenate-landing/
├── server.js           # Servidor Express
├── package.json
└── public/
    ├── index.html      # Landing principal
    └── privacidad.html # Política de privacidad
```

## 🔧 Instalación Local

```bash
npm install
npm start
```

Abre `http://localhost:3000`

## 🌐 Deploy en Railway

1. Conectar repo a Railway
2. Railway detecta Node.js automáticamente
3. Generar dominio en Settings > Networking

## 📄 Páginas

- `/` - Landing principal
- `/privacidad` - Política de privacidad (requerida para Meta Business)

## ✏️ Personalización

Reemplazar en `index.html`:
- `56XXXXXXXXX` → Tu número de WhatsApp Business
- Links y textos según necesites

## 📄 Licencia

MIT - Javier Bassino @ Bassino Digital

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
# Copia el archivo de ejemplo de variables de entorno
cp .env.example .env

# Edita .env con tu número de WhatsApp
# WHATSAPP_NUMBER=56912345678

npm install
npm start
```

Abre `http://localhost:3000`

## 🌐 Deploy en Railway

1. Conectar repo a Railway
2. Railway detecta Node.js automáticamente
3. Configurar variable de entorno en Railway:
   - Ve a **Variables** en tu servicio
   - Agrega: `WHATSAPP_NUMBER` = `tu_numero_de_whatsapp` (ej: `56912345678`)
4. Generar dominio en Settings > Networking

## ⚙️ Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto del servidor (Railway lo configura automáticamente) | `3000` |
| `WHATSAPP_NUMBER` | Número de WhatsApp Business en formato internacional (sin +) | `56912345678` |

## 📄 Páginas

- `/` - Landing principal
- `/privacidad` - Política de privacidad (requerida para Meta Business)

## 📄 Licencia

MIT - Javier Bassino @ Bassino Digital

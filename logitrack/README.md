# LogiTrack — Sistema de Seguimiento de Envíos

Prototipo funcional desarrollado con Flask (Python).  
Almacenamiento en memoria (sin base de datos real).

---

## Estructura del proyecto

```
logitrack/
├── app.py                  # Aplicación Flask principal
├── requirements.txt        # Dependencias
├── README.md
├── static/
│   ├── css/
│   │   └── style.css       # Estilos globales
│   └── js/
│       └── main.js         # Scripts del cliente
└── templates/
    ├── base.html           # Layout base con navbar
    ├── login.html          # Pantalla de inicio de sesión
    ├── panel.html          # Dashboard con estadísticas
    ├── listar.html         # Listado y búsqueda de envíos
    ├── nuevo_envio.html    # Formulario de alta
    └── detalle.html        # Detalle + cambio de estado
```

---

## Requisitos

- Python 3.8 o superior
- pip

---

## Instalación y ejecución

### 1. Crear entorno virtual (recomendado)

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

### 2. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 3. Ejecutar la aplicación

```bash
python app.py
```

### 4. Abrir en el navegador

```
http://localhost:5000
```

---

## Usuarios de prueba

| Usuario    | Contraseña | Rol        |
|------------|------------|------------|
| operador   | op123      | Operador   |
| supervisor | sup123     | Supervisor |

---

## Diferencia de roles

| Acción                         | Operador | Supervisor |
|--------------------------------|----------|------------|
| Ver envíos                     | ✅       | ✅         |
| Crear envíos                   | ✅       | ✅         |
| Avanzar al siguiente estado    | ✅       | ✅         |
| Cambiar a cualquier estado     | ❌       | ✅         |

---

## Funcionalidades

- **Alta de envío** con remitente (nombre, DNI, dirección, teléfono, email) y destinatario (nombre, DNI, dirección, teléfono, email), origen, destino y descripción
- **Tracking ID automático** con formato `LT-XXXXXXXX`
- **Listado de envíos** con tabla paginable
- **Búsqueda** por tracking ID, nombre del remitente o nombre del destinatario
- **Detalle de envío** con historial completo de estados
- **Cambio de estado** con nota y registro de usuario/fecha
- **Roles** Operador (avance secuencial) y Supervisor (libre)
- **Hoja de ruta** para transportistas con información completa del destinatario (nombre, dirección, teléfono)
- **Privacidad de datos** Los datos personales (DNI, dirección, teléfono, email) solo son visibles para supervisores
- **Datos de ejemplo** cargados al iniciar para demo rápida

---

## Notas

- Los datos se pierden al reiniciar el servidor (almacenamiento en memoria).
- Para persistencia real, reemplazar la lista `envios` por una base de datos (SQLite, PostgreSQL, etc.).

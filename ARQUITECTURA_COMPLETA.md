# 🏗️ Sistema de Gestión de Barberías - Arquitectura Completa

## 📋 **Visión General del Sistema**

Sistema integral para la gestión de barberías con 3 roles principales: **SuperAdmin**, **Admin** y **Usuario**, basado en el diagrama ERD proporcionado.

## 🎯 **Stack Tecnológico Profesional**

### **Frontend (Cliente)**
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Styled Components
- **State Management**: Redux Toolkit + RTK Query
- **Routing**: React Router v6
- **UI Components**: Headless UI + Custom Components
- **Charts**: Chart.js + React-Chartjs-2
- **Forms**: React Hook Form + Zod
- **Notifications**: React Hot Toast

### **Backend (Servidor)**
- **Runtime**: Node.js 18+
- **Framework**: Express.js + TypeScript
- **ORM**: Prisma
- **Database**: PostgreSQL 15+
- **Authentication**: JWT + bcrypt
- **Validation**: Zod
- **Documentation**: Swagger/OpenAPI
- **File Upload**: Multer + Cloudinary
- **Email**: Nodemailer
- **Caching**: Redis

### **Infraestructura**
- **Containerización**: Docker + Docker Compose
- **Reverse Proxy**: Nginx
- **Process Manager**: PM2
- **Monitoring**: Winston (Logs) + Morgan (HTTP)
- **Testing**: Jest + Supertest + Cypress

## 🏛️ **Arquitectura del Sistema**

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENTE (Frontend)                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │   Usuario   │ │    Admin    │ │ SuperAdmin  │ │   Barbero   ││
│  │   (Cliente) │ │ (Barbería)  │ │  (Sistema)  │ │ (Empleado)  ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    NGINX (Reverse Proxy)                        │
│              Load Balancer + SSL Termination                    │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND API (Express.js)                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │   Auth      │ │  Barberías  │ │   Citas     │ │  Pagos      ││
│  │  Service    │ │  Service    │ │  Service    │ │  Service    ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐│
│  │  Usuarios   │ │  Servicios  │ │  Reportes   │ │  Notific.   ││
│  │  Service    │ │  Service    │ │  Service    │ │  Service    ││
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
└─────────────────────────────────────────────────────────────────┘
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   PostgreSQL    │ │     Redis       │ │   Cloudinary    │
│   (Database)    │ │    (Cache)      │ │   (Files)       │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## 👥 **Sistema de Roles y Permisos**

### **🔴 SuperAdmin (Administrador del Sistema)**
**Funcionalidades:**
- Gestión global de todas las barberías
- Crear, editar y eliminar barberías
- Asignar administradores a barberías
- Gestión de usuarios del sistema
- Reportes consolidados de todo el sistema
- Configuración global del sistema
- Monitoreo de performance y métricas
- Gestión de roles y permisos

**Permisos:**
```typescript
const SUPER_ADMIN_PERMISSIONS = [
  'manage_all_barbershops',
  'manage_all_users',
  'assign_barbershop_admins',
  'view_global_reports',
  'manage_system_settings',
  'view_audit_logs',
  'manage_payment_methods',
  'export_data'
];
```

### **🟡 Admin (Administrador de Barbería)**
**Funcionalidades:**
- Gestión de su barbería específica
- Gestionar barberos y empleados
- Configurar servicios y precios
- Gestionar horarios de la barbería
- Ver reportes de su barbería
- Gestionar citas y reservas
- Configurar métodos de pago
- Gestionar comentarios y reseñas

**Permisos:**
```typescript
const ADMIN_PERMISSIONS = [
  'manage_barbershop',
  'manage_barbers',
  'manage_services',
  'manage_schedules',
  'view_barbershop_reports',
  'manage_appointments',
  'manage_payments',
  'manage_reviews',
  'view_barbershop_analytics'
];
```

### **🟢 Usuario (Cliente)**
**Funcionalidades:**
- Buscar barberías cercanas
- Ver servicios disponibles
- Reservar citas online
- Ver historial de citas
- Calificar y comentar servicios
- Gestionar perfil personal
- Recibir notificaciones
- Cancelar citas

**Permisos:**
```typescript
const USER_PERMISSIONS = [
  'view_barbershops',
  'book_appointments',
  'view_own_appointments',
  'cancel_own_appointments',
  'leave_reviews',
  'manage_own_profile',
  'view_own_history'
];
```

## 📁 **Estructura de Directorios del Proyecto**

```
barbershop-management-system/
├── 📁 backend/                     # API Node.js
│   ├── 📁 src/
│   │   ├── 📁 controllers/         # Controladores de rutas
│   │   │   ├── auth.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   ├── barbershop.controller.ts
│   │   │   ├── barber.controller.ts
│   │   │   ├── service.controller.ts
│   │   │   ├── appointment.controller.ts
│   │   │   ├── payment.controller.ts
│   │   │   ├── review.controller.ts
│   │   │   └── report.controller.ts
│   │   ├── 📁 services/            # Lógica de negocio
│   │   │   ├── auth.service.ts
│   │   │   ├── user.service.ts
│   │   │   ├── barbershop.service.ts
│   │   │   ├── barber.service.ts
│   │   │   ├── service.service.ts
│   │   │   ├── appointment.service.ts
│   │   │   ├── payment.service.ts
│   │   │   ├── review.service.ts
│   │   │   └── report.service.ts
│   │   ├── 📁 models/              # Modelos de datos (Prisma)
│   │   │   └── index.ts
│   │   ├── 📁 middleware/          # Middlewares
│   │   │   ├── auth.middleware.ts
│   │   │   ├── role.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── 📁 routes/              # Definición de rutas
│   │   │   ├── auth.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   ├── barbershop.routes.ts
│   │   │   ├── barber.routes.ts
│   │   │   ├── service.routes.ts
│   │   │   ├── appointment.routes.ts
│   │   │   ├── payment.routes.ts
│   │   │   ├── review.routes.ts
│   │   │   └── report.routes.ts
│   │   ├── 📁 utils/               # Utilidades
│   │   │   ├── logger.ts
│   │   │   ├── jwt.ts
│   │   │   ├── bcrypt.ts
│   │   │   └── validators.ts
│   │   ├── 📁 types/               # TypeScript types
│   │   │   ├── auth.types.ts
│   │   │   ├── user.types.ts
│   │   │   ├── barbershop.types.ts
│   │   │   └── index.ts
│   │   ├── 📁 config/              # Configuraciones
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── cloudinary.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── 📁 prisma/                  # Esquema de base de datos
│   │   ├── schema.prisma
│   │   ├── seed.ts
│   │   └── migrations/
│   ├── 📁 uploads/                 # Archivos subidos
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── 📁 frontend/                    # Aplicación React
│   ├── 📁 src/
│   │   ├── 📁 components/          # Componentes reutilizables
│   │   │   ├── 📁 ui/              # Componentes base
│   │   │   ├── 📁 forms/           # Formularios
│   │   │   ├── 📁 charts/          # Gráficos
│   │   │   └── 📁 layout/          # Layouts
│   │   ├── 📁 pages/               # Páginas principales
│   │   │   ├── 📁 auth/            # Login, Register
│   │   │   ├── 📁 dashboard/       # Dashboards por rol
│   │   │   ├── 📁 barbershops/     # Gestión de barberías
│   │   │   ├── 📁 barbers/         # Gestión de barberos
│   │   │   ├── 📁 services/        # Gestión de servicios
│   │   │   ├── 📁 appointments/    # Gestión de citas
│   │   │   ├── 📁 payments/        # Gestión de pagos
│   │   │   ├── 📁 reviews/         # Gestión de reseñas
│   │   │   └── 📁 reports/         # Reportes
│   │   ├── 📁 hooks/               # Custom hooks
│   │   ├── 📁 store/               # Redux store
│   │   ├── 📁 services/            # API services
│   │   ├── 📁 utils/               # Utilidades
│   │   ├── 📁 types/               # TypeScript types
│   │   ├── 📁 styles/              # Estilos
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── 📁 shared/                      # Código compartido
│   ├── 📁 types/                   # Tipos compartidos
│   └── 📁 utils/                   # Utilidades compartidas
│
├── 📁 docker/                      # Configuraciones Docker
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── nginx.conf
│
├── docker-compose.yml              # Orquestación de servicios
├── docker-compose.prod.yml         # Configuración de producción
├── .gitignore
└── README.md
```

## 🗄️ **Esquema de Base de Datos (PostgreSQL)**

### **Entidades Principales (Basadas en tu ERD)**

```sql
-- Roles del sistema
CREATE TABLE roles (
  id_rol UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(50) NOT NULL UNIQUE,
  descripcion TEXT,
  permisos JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Personas (información básica)
CREATE TABLE personas (
  id_persona UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  edad INTEGER,
  telefono VARCHAR(20),
  direccion TEXT,
  ciudad VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Usuarios del sistema
CREATE TABLE users (
  id_user UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_persona UUID REFERENCES personas(id_persona) ON DELETE CASCADE,
  id_rol UUID REFERENCES roles(id_rol),
  correo VARCHAR(255) NOT NULL UNIQUE,
  contraseña VARCHAR(255) NOT NULL,
  activo BOOLEAN DEFAULT TRUE,
  email_verificado BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Barberías
CREATE TABLE barberias (
  id_barberia UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT,
  direccion TEXT NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(255),
  sitio_web VARCHAR(255),
  logo VARCHAR(500),
  imagenes JSONB DEFAULT '[]',
  num_barberos INTEGER DEFAULT 0,
  calificacion DECIMAL(3,2) DEFAULT 0.00,
  total_resenas INTEGER DEFAULT 0,
  activa BOOLEAN DEFAULT TRUE,
  admin_id UUID REFERENCES users(id_user),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Barberos
CREATE TABLE barbers (
  id_barber UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_user_id UUID REFERENCES users(id_user) ON DELETE CASCADE,
  id_barberia UUID REFERENCES barberias(id_barberia),
  calificacion DECIMAL(3,2) DEFAULT 0.00,
  disponible BOOLEAN DEFAULT TRUE,
  especialidades TEXT[],
  experiencia_años INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Horarios de barberías
CREATE TABLE horarios (
  id_horario UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_barberia UUID REFERENCES barberias(id_barberia) ON DELETE CASCADE,
  dia_semana INTEGER NOT NULL, -- 0=Domingo, 1=Lunes, etc.
  hora_inicio TIME NOT NULL,
  hora_fin TIME NOT NULL,
  detalles TEXT,
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tipos de cortes/servicios
CREATE TABLE tipo_cortes (
  id_tipo_cortes UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT,
  duracion_minutos INTEGER NOT NULL,
  precio_base DECIMAL(10,2) NOT NULL,
  categoria VARCHAR(100),
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Servicios de barberos
CREATE TABLE barber_tipo_cortes (
  id_barber_tipo_cortes UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_barber_id UUID REFERENCES barbers(id_barber) ON DELETE CASCADE,
  id_tipo_cortes_id UUID REFERENCES tipo_cortes(id_tipo_cortes) ON DELETE CASCADE,
  precio_personalizado DECIMAL(10,2),
  disponible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(id_barber_id, id_tipo_cortes_id)
);

-- Detalles de servicios de barberos
CREATE TABLE detalles_bar (
  id_detalles_bar UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_barber_id UUID REFERENCES barbers(id_barber) ON DELETE CASCADE,
  id_tipo_cortes_id UUID REFERENCES tipo_cortes(id_tipo_cortes) ON DELETE CASCADE,
  cant_cortes INTEGER DEFAULT 0,
  servicios_disponibles BOOLEAN DEFAULT TRUE,
  cortes_img VARCHAR(500),
  descripcion_adicional TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Reservas/Citas
CREATE TABLE reservas (
  id_reserva UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_barbero_id UUID REFERENCES barbers(id_barber),
  id_barberia_id UUID REFERENCES barberias(id_barberia),
  id_user_id UUID REFERENCES users(id_user),
  id_tipo_cortes_id UUID REFERENCES tipo_cortes(id_tipo_cortes),
  dia DATE NOT NULL,
  hora_llegada TIME NOT NULL,
  hora_fin TIME NOT NULL,
  monto DECIMAL(10,2) NOT NULL,
  estado VARCHAR(50) DEFAULT 'PENDIENTE',
  notas TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Facturas
CREATE TABLE facturas (
  id_factura UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_reserva UUID REFERENCES reservas(id_reserva) ON DELETE CASCADE,
  fecha TIMESTAMP DEFAULT NOW(),
  metodo_de_pago VARCHAR(50) NOT NULL,
  monto_total DECIMAL(10,2) NOT NULL,
  estado VARCHAR(50) DEFAULT 'PENDIENTE',
  numero_factura VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Comentarios/Reseñas
CREATE TABLE comentarios (
  id_comentario UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_user_id UUID REFERENCES users(id_user),
  id_barbero_id UUID REFERENCES barbers(id_barber),
  id_barberia_id UUID REFERENCES barberias(id_barberia),
  id_reserva UUID REFERENCES reservas(id_reserva),
  contenido TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT NOW(),
  estado VARCHAR(50) DEFAULT 'PENDIENTE',
  calificacion INTEGER CHECK (calificacion >= 1 AND calificacion <= 5),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Notificaciones
CREATE TABLE notificaciones (
  id_notificacion UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  id_user_id UUID REFERENCES users(id_user) ON DELETE CASCADE,
  titulo VARCHAR(200) NOT NULL,
  mensaje TEXT NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  leida BOOLEAN DEFAULT FALSE,
  datos_adicionales JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Logs de auditoría
CREATE TABLE audit_logs (
  id_log UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  accion VARCHAR(100) NOT NULL,
  entidad VARCHAR(100) NOT NULL,
  entidad_id UUID,
  usuario_id UUID REFERENCES users(id_user),
  datos_antes JSONB,
  datos_despues JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔐 **Sistema de Autenticación y Autorización**

### **Flujo de Autenticación JWT**

```typescript
// 1. Login
POST /api/auth/login
{
  "correo": "usuario@example.com",
  "contraseña": "password123"
}

// 2. Respuesta
{
  "success": true,
  "data": {
    "user": {
      "id_user": "uuid",
      "correo": "usuario@example.com",
      "nombre": "Juan",
      "apellido": "Pérez",
      "rol": "ADMIN",
      "barberia_id": "uuid" // Solo si es admin
    },
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token"
  }
}

// 3. Middleware de autorización
const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.rol)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }
    next();
  };
};
```

## 🚀 **Funcionalidades por Rol**

### **🔴 SuperAdmin Dashboard**
- **Métricas Globales**: Total de barberías, usuarios, citas, ingresos
- **Gestión de Barberías**: Crear, editar, eliminar barberías
- **Asignación de Admins**: Asignar administradores a barberías
- **Reportes Consolidados**: Ingresos, citas, calificaciones globales
- **Gestión de Usuarios**: Ver, editar, desactivar usuarios
- **Configuración del Sistema**: Parámetros globales
- **Logs de Auditoría**: Historial de acciones del sistema

### **🟡 Admin Dashboard**
- **Métricas de Barbería**: Citas, ingresos, barberos, calificaciones
- **Gestión de Barberos**: Agregar, editar, horarios, servicios
- **Gestión de Servicios**: Tipos de cortes, precios, disponibilidad
- **Calendario de Citas**: Vista semanal/mensual de citas
- **Reportes Financieros**: Ingresos, pagos, facturas
- **Gestión de Reseñas**: Moderar comentarios y calificaciones
- **Configuración**: Horarios, precios, políticas

### **🟢 Usuario Dashboard**
- **Buscar Barberías**: Filtros por ubicación, servicios, calificaciones
- **Reservar Cita**: Seleccionar barbero, servicio, fecha y hora
- **Mis Citas**: Historial y próximas citas
- **Perfil Personal**: Editar información, preferencias
- **Reseñas**: Calificar y comentar servicios
- **Notificaciones**: Recordatorios de citas, promociones

## 📊 **API Endpoints Principales**

### **Autenticación**
```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/refresh
POST   /api/auth/logout
```

### **Usuarios**
```
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users                    # Solo SuperAdmin
POST   /api/users                    # Solo SuperAdmin
PUT    /api/users/:id                # Solo SuperAdmin
DELETE /api/users/:id                # Solo SuperAdmin
```

### **Barberías**
```
GET    /api/barbershops              # Público
GET    /api/barbershops/:id          # Público
POST   /api/barbershops              # Solo SuperAdmin
PUT    /api/barbershops/:id          # Admin de la barbería
DELETE /api/barbershops/:id          # Solo SuperAdmin
```

### **Barberos**
```
GET    /api/barbers                  # Público
GET    /api/barbers/:id              # Público
POST   /api/barbers                  # Admin de barbería
PUT    /api/barbers/:id              # Admin de barbería
DELETE /api/barbers/:id              # Admin de barbería
```

### **Servicios**
```
GET    /api/services                 # Público
GET    /api/services/:id             # Público
POST   /api/services                 # Admin de barbería
PUT    /api/services/:id             # Admin de barbería
DELETE /api/services/:id             # Admin de barbería
```

### **Citas/Reservas**
```
GET    /api/appointments             # Según rol
POST   /api/appointments             # Usuarios
PUT    /api/appointments/:id         # Según rol
DELETE /api/appointments/:id         # Según rol
```

### **Pagos**
```
GET    /api/payments                 # Admin/SuperAdmin
POST   /api/payments                 # Usuarios
PUT    /api/payments/:id             # Admin/SuperAdmin
```

### **Reseñas**
```
GET    /api/reviews                  # Público
POST   /api/reviews                  # Usuarios
PUT    /api/reviews/:id              # Usuarios
DELETE /api/reviews/:id              # Admin/SuperAdmin
```

### **Reportes**
```
GET    /api/reports/dashboard        # Según rol
GET    /api/reports/financial        # Admin/SuperAdmin
GET    /api/reports/appointments     # Admin/SuperAdmin
GET    /api/reports/barbers          # Admin/SuperAdmin
```

## 🔒 **Seguridad Implementada**

- **Encriptación**: bcrypt para contraseñas
- **Tokens**: JWT con expiración corta (15 min) + refresh token (7 días)
- **Rate Limiting**: Protección contra ataques DDoS
- **CORS**: Configuración segura
- **Validación**: Input sanitization con Zod
- **Logs**: Auditoría completa de acciones
- **HTTPS**: Certificados SSL
- **Helmet**: Headers de seguridad

## 📈 **Métricas de Escalabilidad**

- **Usuarios concurrentes**: 10,000+
- **Barberías**: 1,000+
- **Citas diarias**: 50,000+
- **Response time**: <200ms
- **Uptime**: 99.9%

## 🚀 **Deployment**

### **Desarrollo**
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start
```

### **Producción con Docker**
```bash
docker-compose up -d
```

## 🎯 **Roadmap de Desarrollo**

### **Fase 1 (MVP) - 4 semanas**
- ✅ Autenticación y autorización por roles
- ✅ Gestión básica de barberías
- ✅ Sistema de citas
- ✅ Dashboard básico por rol

### **Fase 2 (Core) - 6 semanas**
- ✅ Sistema de pagos
- ✅ Notificaciones
- ✅ Reportes básicos
- ✅ Mobile responsive

### **Fase 3 (Advanced) - 8 semanas**
- ✅ App móvil (React Native)
- ✅ Integración con pasarelas de pago
- ✅ Analytics avanzados
- ✅ Sistema de fidelización

### **Fase 4 (Enterprise) - 10 semanas**
- ✅ Multi-tenant
- ✅ API pública
- ✅ Integraciones externas
- ✅ Machine Learning para recomendaciones


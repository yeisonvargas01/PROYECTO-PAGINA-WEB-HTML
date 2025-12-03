# 🎯 APLICACIÓN WEB PARA PERSONAS CON TDAH

## FocusFlow - Tu Asistente Personal para el Enfoque

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)
![Progreso](https://img.shields.io/badge/Progreso-10%25-blue)
![Entrega](https://img.shields.io/badge/Entrega-6%20Diciembre-red)

---

## 👥 EQUIPO DE DESARROLLO

- **Yeison Andrés Vargas S.**
- **Liseth Yeraldin Nieto**
- **Valentina Arias Salazar**

**Curso**: Técnico en Herramientas para la Codificación de Software  
**Institución**: [Nombre de la institución]  
**Fecha de Entrega**: 6 de Diciembre de 2024

---

## 📋 DESCRIPCIÓN DEL PROYECTO

**FocusFlow** es una aplicación web diseñada específicamente para ayudar a personas con TDAH (Trastorno por Déficit de Atención e Hiperactividad) a:

- ⏰ **Mantener el enfoque** mediante alarmas inteligentes
- 💪 **Recibir motivación** con mensajes personalizados
- ✅ **Gestionar tareas** de manera efectiva
- ⏱️ **Mejorar la productividad** con la técnica Pomodoro
- 🎯 **Alcanzar sus metas** paso a paso

---

## ✨ CARACTERÍSTICAS PRINCIPALES

### 🔔 Sistema de Alarmas Inteligentes
- Alarmas personalizables con mensajes motivacionales
- Sonidos suaves y no invasivos
- Función de posponer (snooze)
- Repetición automática (diaria, semanal, personalizada)
- Notificaciones del navegador

### 💬 Mensajes Motivacionales
- Frases de superación y ánimo
- Mensajes contextuales según la hora del día
- Celebración de logros
- Recordatorios positivos
- Notificaciones flotantes animadas

### ✅ Gestor de Tareas
- Crear, editar y eliminar tareas
- Prioridades (Alta, Media, Baja)
- Fechas límite
- Categorías personalizadas
- Filtros y búsqueda
- Progreso visual

### ⏱️ Temporizador Pomodoro
- Sesiones de trabajo de 25 minutos
- Descansos cortos de 5 minutos
- Descansos largos de 15 minutos
- Estadísticas de productividad
- Integración con mensajes motivacionales

---

## 💻 TECNOLOGÍAS UTILIZADAS

### Frontend
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5** - Estructura semántica
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** - Estilos modernos y responsivos
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript ES6+** - Lógica de la aplicación

### Frameworks y Bibliotecas
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) **Bootstrap 5** o ![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Diseño responsivo
- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) **React.js** (opcional) - Componentes dinámicos
- **Animate.css** - Animaciones profesionales

### Almacenamiento y APIs
- **LocalStorage** - Persistencia de datos local
- **Web Notifications API** - Notificaciones del navegador
- **Web Audio API** - Reproducción de sonidos

---

## 📁 ESTRUCTURA DEL PROYECTO

```
PROYECTO-TDAH-APP/
│
├── 📄 index.html                    # Landing page principal
├── 📄 app.html                      # Dashboard de la aplicación
├── 📄 about.html                    # Información sobre TDAH
│
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── variables.css           # Variables CSS (colores, fuentes)
│   │   ├── reset.css               # Reset CSS
│   │   ├── style.css               # Estilos principales
│   │   ├── components.css          # Componentes reutilizables
│   │   ├── animations.css          # Animaciones personalizadas
│   │   └── responsive.css          # Media queries
│   │
│   ├── 📂 js/
│   │   ├── main.js                 # Inicialización
│   │   ├── alarm-system.js         # Sistema de alarmas ⭐
│   │   ├── motivational.js         # Mensajes motivacionales ⭐
│   │   ├── task-manager.js         # Gestor de tareas
│   │   ├── pomodoro.js             # Temporizador Pomodoro
│   │   ├── notifications.js        # Sistema de notificaciones
│   │   ├── storage.js              # LocalStorage manager
│   │   └── utils.js                # Funciones auxiliares
│   │
│   ├── 📂 images/
│   │   ├── hero/                   # Imágenes hero
│   │   ├── icons/                  # Iconos SVG
│   │   └── illustrations/          # Ilustraciones
│   │
│   ├── 📂 sounds/
│   │   ├── alarm-gentle.mp3        # Alarma suave
│   │   ├── alarm-energetic.mp3     # Alarma energética
│   │   ├── notification.mp3        # Sonido notificación
│   │   └── success.mp3             # Sonido de éxito
│   │
│   └── 📂 libs/
│       ├── animate.min.css         # Biblioteca de animaciones
│       └── bootstrap.min.css       # Bootstrap (opcional)
│
└── 📂 docs/
    ├── 📄 DOCUMENTACION_PROYECTO_TDAH.md    # Documentación completa
    ├── 📄 PLAN_IMPLEMENTACION.md            # Plan de implementación
    ├── 📄 TODO.md                           # Lista de tareas
    ├── 📄 RESUMEN_EJECUTIVO.md              # Resumen ejecutivo
    ├── 📄 FAQ.md                            # Preguntas frecuentes
    └── 📄 README.md                         # Este archivo
```

---

## 📚 DOCUMENTACIÓN

### 📖 Guías Principales

1. **[RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md)** 🌟 **¡EMPIEZA AQUÍ!**
   - Visión general del proyecto
   - Características principales
   - Tecnologías utilizadas
   - Próximos pasos

2. **[DOCUMENTACION_PROYECTO_TDAH.md](DOCUMENTACION_PROYECTO_TDAH.md)**
   - Análisis completo del proyecto
   - Arquitectura y diseño
   - Objetivos y alcance
   - Buenas prácticas

3. **[PLAN_IMPLEMENTACION.md](PLAN_IMPLEMENTACION.md)**
   - Plan paso a paso
   - Código de ejemplo
   - Cronograma detallado
   - Guía de desarrollo

4. **[TODO.md](TODO.md)**
   - Lista de tareas por fase
   - Progreso del proyecto
   - Checklist de funcionalidades
   - Distribución del trabajo

5. **[FAQ.md](FAQ.md)**
   - Preguntas frecuentes
   - Solución de problemas
   - Consejos y tips
   - Recursos útiles

---

## 🚀 INICIO RÁPIDO

### 1️⃣ Revisar Documentación (1-2 horas)
```bash
# Lee en este orden:
1. README.md (este archivo)
2. RESUMEN_EJECUTIVO.md
3. PLAN_IMPLEMENTACION.md
4. TODO.md
```

### 2️⃣ Configurar Entorno de Desarrollo
```bash
# Clonar o descargar el proyecto
git clone [URL-del-repositorio]

# Abrir con tu editor favorito
code .  # VS Code
```

### 3️⃣ Comenzar a Desarrollar
```bash
# Abrir index.html en el navegador
# O usar Live Server en VS Code
```

---

## 📅 CRONOGRAMA

### Semana 1: Desarrollo Core (22-28 Nov)
- ✅ **Día 1-2**: Documentación y planificación
- 🔄 **Día 3-4**: Sistema de alarmas + Mensajes motivacionales
- ⏳ **Día 5**: Gestor de tareas + Pomodoro
- ⏳ **Día 6-7**: Estilos, animaciones y testing

### Semana 2: Finalización (29 Nov - 6 Dic)
- ⏳ **29 Nov**: AVANCE - Presentación funcional
- ⏳ **30 Nov - 5 Dic**: Pulido final y optimización
- ⏳ **6 Dic**: ENTREGA FINAL 🎉

---

## 🎨 PALETA DE COLORES

```css
/* Colores Principales */
--primary: #6C63FF;           /* Púrpura - Calma y creatividad */
--secondary: #4ECDC4;         /* Turquesa - Tranquilidad */
--accent: #FFE66D;            /* Amarillo suave - Energía positiva */
--success: #95E1D3;           /* Verde menta - Logros */
--warning: #FFB88C;           /* Naranja suave - Atención */
--danger: #F38181;            /* Rosa coral - Urgente */
```

Estos colores fueron seleccionados específicamente por sus propiedades calmantes, ideales para personas con TDAH.

---

## 🎯 OBJETIVOS DEL PROYECTO

### Objetivos Generales
- ✅ Crear una aplicación web funcional y profesional
- ✅ Aplicar conocimientos de HTML, CSS y JavaScript
- ✅ Implementar buenas prácticas de programación
- ✅ Desarrollar una solución útil para personas con TDAH

### Objetivos Específicos
- ⏰ Implementar sistema de alarmas con notificaciones
- 💬 Crear mensajes motivacionales contextuales
- ✅ Desarrollar gestor de tareas intuitivo
- ⏱️ Integrar temporizador Pomodoro
- 🎨 Diseñar interfaz accesible y atractiva
- 📱 Asegurar diseño responsivo
- 📚 Documentar el proceso completo

### Objetivos de Aprendizaje
- 📖 Dominar HTML5 semántico
- 🎨 Aplicar CSS avanzado (Flexbox, Grid, Animaciones)
- 💻 Programar en JavaScript moderno (ES6+)
- 🔧 Utilizar frameworks profesionales
- 🏗️ Implementar patrones de diseño
- 👥 Trabajar en equipo efectivamente

---

## 🧪 TESTING

### Navegadores Soportados
- ✅ Google Chrome (Recomendado)
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Microsoft Edge

### Dispositivos
- 📱 Móviles (320px - 576px)
- 📱 Tablets (576px - 992px)
- 💻 Desktop (992px+)

---

## 📦 INSTALACIÓN Y USO

### Requisitos Previos
- Navegador web moderno
- Editor de código (VS Code recomendado)
- Conocimientos básicos de HTML, CSS y JavaScript

### Instalación
```bash
# 1. Clonar el repositorio
git clone [URL-del-repositorio]

# 2. Navegar al directorio
cd PROYECTO-TDAH-APP

# 3. Abrir con tu editor
code .

# 4. Abrir index.html en el navegador
# O usar Live Server en VS Code
```

### Uso
1. Abre `index.html` en tu navegador
2. Explora la landing page
3. Haz clic en "Comenzar" para acceder al dashboard
4. Configura tus alarmas y tareas
5. ¡Comienza a ser más productivo! 🚀

---

## 🤝 CONTRIBUCIÓN

### Cómo Contribuir
1. Revisa el archivo `TODO.md` para ver tareas pendientes
2. Asigna una tarea a tu nombre
3. Crea una rama para tu funcionalidad
4. Desarrolla y prueba tu código
5. Haz commit con mensajes descriptivos
6. Crea un Pull Request

### Convenciones de Código
- **HTML**: Usar etiquetas semánticas
- **CSS**: Seguir metodología BEM
- **JavaScript**: Usar ES6+, camelCase para variables
- **Commits**: Mensajes descriptivos en español

---

## 📊 PROGRESO DEL PROYECTO

### Estado Actual: 10% Completado

```
[██░░░░░░░░░░░░░░░░░░] 10%

✅ Fase 1: Documentación (100%)
🔄 Fase 2: Estructura Base (0%)
⏳ Fase 3: Diseño de Páginas (0%)
⏳ Fase 4: Funcionalidades Core (0%)
⏳ Fase 5: Estilos y Animaciones (0%)
⏳ Fase 6: Testing (0%)
⏳ Fase 7: Documentación Final (0%)
⏳ Fase 8: Deployment (0%)
```

---

## 🏆 HITOS

- [x] **22 Nov**: Inicio del proyecto
- [x] **22 Nov**: Documentación completa
- [ ] **25 Nov**: Sistema de alarmas funcional
- [ ] **27 Nov**: Gestor de tareas completo
- [ ] **29 Nov**: AVANCE - Presentación funcional
- [ ] **3 Dic**: Testing completo
- [ ] **5 Dic**: Optimización final
- [ ] **6 Dic**: ENTREGA FINAL 🎉

---

## CONTACTO

### Equipo de Desarrollo
- **Yeison Andrés Vargas S.** - [Email/GitHub]
- **Liseth Yamileth Nieto** - [Email/GitHub]
- **Valentina Arias Salazar** - [Email/GitHub]


---

## 📄 LICENCIA

Este proyecto es desarrollado con fines educativos para el curso de Técnico en Herramientas para la Codificación de Software.

---

## 🙏 AGRADECIMIENTOS

- A nuestra profesora por la guía y apoyo
- A las personas con TDAH que inspiraron este proyecto
- A la comunidad de desarrolladores por los recursos compartidos

---

## 💡 INSPIRACIÓN

> "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito."
> 
> — Albert Schweitzer

Este proyecto nace del deseo de ayudar a personas con TDAH a alcanzar su máximo potencial, proporcionándoles herramientas que faciliten su concentración y organización.

---

## 🚀 PRÓXIMOS PASOS

1. **Lee el [RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md)**
2. **Revisa el [PLAN_IMPLEMENTACION.md](PLAN_IMPLEMENTACION.md)**
3. **Consulta el [TODO.md](TODO.md)** para ver las tareas
4. **Comienza a desarrollar** 💻

---

## ⭐ CARACTERÍSTICAS DESTACADAS

- 🎯 **Enfocado en TDAH**: Diseñado específicamente para personas con TDAH
- 💪 **Motivacional**: Mensajes positivos constantes
- 🎨 **Diseño Calmante**: Colores y animaciones suaves
- 📱 **Responsivo**: Funciona en todos los dispositivos
- 🔔 **Notificaciones Inteligentes**: Recordatorios no invasivos
- 💾 **Sin Servidor**: Todo funciona localmente
- 🚀 **Rápido**: Carga instantánea
- ♿ **Accesible**: Diseño inclusivo

---

## 📈 MÉTRICAS DE ÉXITO

El proyecto será exitoso si:
- ✅ Todas las funcionalidades core están implementadas
- ✅ La aplicación es intuitiva y fácil de usar
- ✅ El diseño es profesional y atractivo
- ✅ Funciona correctamente en todos los dispositivos
- ✅ El código está bien documentado
- ✅ Se cumplen los objetivos del curso
- ✅ El equipo está orgulloso del resultado

---

## 🎉 ¡VAMOS EQUIPO!

**Este es nuestro momento para brillar. Tenemos:**
- ✅ Un plan completo
- ✅ Documentación detallada
- ✅ Código de ejemplo
- ✅ Un equipo capaz
- ✅ Tiempo suficiente



---

<div align="center">

**Hecho con 💙 por el equipo FocusFlow**

**Yeison • Liseth • Valentina**

---

![TDAH](https://img.shields.io/badge/TDAH-Awareness-purple)
![Educación](https://img.shields.io/badge/Educación-Técnica-blue)
![2024](https://img.shields.io/badge/Año-2024-green)

</div>

'use strict';

/**
 * ===================================== * FOCUSFLOW - JAVASCRIPT PRINCIPAL
 * Aplicación para gestión de TDAH
 * ===================================== */

// =====================================// UTILIDADES GENERALES
// =====================================
/**
 * Agregar evento a uno o múltiples elementos
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Debounce - Evitar ejecuciones múltiples
 */
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Generar ID único
 */
const generateId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

/**
 * Formatear fecha
 */
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es-ES', options);
}

/**
 * Mostrar notificación
 */
const showNotification = (message, type = 'success') => {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <ion-icon name="${type === 'success' ? 'checkmark-circle' : 'alert-circle'}-outline"></ion-icon>
    <span>${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Remover después de 3 segundos
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// =====================================// NAVEGACIÓN Y HEADER
// =====================================
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

/**
 * Toggle navbar en móvil
 */
const toggleNavbar = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

if (navToggler) {
  addEventOnElem(navToggler, "click", toggleNavbar);
}

/**
 * Cerrar navbar al hacer clic en un link
 */
const closeNavbar = () => {
  navbar.classList.remove("active");
  document.body.classList.remove("nav-active");
}

if (navLinks.length > 0) {
  addEventOnElem(navLinks, "click", closeNavbar);
}

/**
 * Header activo al hacer scroll
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header?.classList.add("active");
    backTopBtn?.classList.add("active");
  } else {
    header?.classList.remove("active");
    backTopBtn?.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", debounce(headerActive, 100));

// =====================================// SISTEMA DE FILTROS
// =====================================
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

/**
 * Filtrar elementos por categoría
 */
const filter = function () {
  if (lastClickedFilterBtn) {
    lastClickedFilterBtn.classList.remove("active");
  }
  
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all") {

      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
      
      // Animación de entrada
      setTimeout(() => {
        filterItems[i].style.opacity = "1";
        filterItems[i].style.transform = "translateY(0)";
      }, 10);

    } else {
      filterItems[i].style.opacity = "0";
      filterItems[i].style.transform = "translateY(20px)";
      
      setTimeout(() => {
        filterItems[i].style.display = "none";
        filterItems[i].classList.remove("active");
      }, 300);
    }
  }
}

if (filterBtns.length > 0) {
  addEventOnElem(filterBtns, "click", filter);
}

// =====================================// LOCAL STORAGE MANAGER
// =====================================
const StorageManager = {
  /**
   * Guardar datos en LocalStorage
   */
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error al guardar en LocalStorage:', error);
      showNotification('Error al guardar datos', 'error');
      return false;
    }
  },

  /**
   * Obtener datos de LocalStorage
   */
  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error al leer de LocalStorage:', error);
      return null;
    }
  },

  /**
   * Eliminar datos de LocalStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error al eliminar de LocalStorage:', error);
      return false;
    }
  },

  /**
   * Limpiar todo el LocalStorage
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error al limpiar LocalStorage:', error);
      return false;
    }
  }
};

// =====================================// SISTEMA DE REGISTRO
// =====================================
const registrationForm = document.getElementById("registrationForm");
const registrationMessage = document.getElementById("registrationMessage");
const backToHomePageBtn = document.getElementById("backToHomePage");

/**
 * Validar email
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validar teléfono
 */
const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Manejar envío del formulario de registro
 */
if (registrationForm) {
  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('userName')?.value.trim();
    const email = document.getElementById('userEmail')?.value.trim();
    const phone = document.getElementById('userPhone')?.value.trim();
    const goal = document.getElementById('userGoal')?.value;
    const message = document.getElementById('userMessage')?.value.trim();

    // Validaciones
    if (!name || name.length < 3) {
      showNotification('Por favor ingresa un nombre válido (mínimo 3 caracteres)', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Por favor ingresa un email válido', 'error');
      return;
    }

    if (!isValidPhone(phone)) {
      showNotification('Por favor ingresa un teléfono válido (10 dígitos)', 'error');
      return;
    }

    if (!goal) {
      showNotification('Por favor selecciona tu objetivo principal', 'error');
      return;
    }

    // Crear objeto de usuario
    const userData = {
      id: generateId(),
      name,
      email,
      phone,
      goal,
      message,
      registrationDate: new Date().toISOString(),
      active: true
    };

    // Guardar en LocalStorage
    const users = StorageManager.get('focusflow_users') || [];
    users.push(userData);
    
    if (StorageManager.save('focusflow_users', users)) {
      // Guardar usuario actual
      StorageManager.save('focusflow_current_user', userData);

      // Mostrar mensaje de éxito
      registrationForm.style.display = "none";
      registrationMessage.style.display = "flex";
      backToHomePageBtn.style.display = "inline-flex";

      showNotification('¡Registro exitoso! Bienvenido a FocusFlow', 'success');

      // Inicializar datos del usuario
      initializeUserData(userData.id);
    }
  });
}

/**
 * Volver a la página principal
 */
if (backToHomePageBtn) {
  backToHomePageBtn.addEventListener("click", function() {
    registrationForm.style.display = "block";
    registrationMessage.style.display = "none";
    backToHomePageBtn.style.display = "none";
    registrationForm.reset();
    
    // Scroll suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Inicializar datos del usuario
 */
const initializeUserData = (userId) => {
  // Crear estructura de datos inicial
  const initialData = {
    alarms: [],
    tasks: [],
    pomodoros: [],
    statistics: {
      totalTasks: 0,
      completedTasks: 0,
      totalPomodoros: 0,
      totalFocusTime: 0,
      streak: 0
    },
    settings: {
      pomodoroTime: 25,
      shortBreak: 5,
      longBreak: 15,
      notifications: true,
      sound: true
    }
  };

  StorageManager.save(`focusflow_data_${userId}`, initialData);
}

// =====================================// SISTEMA DE ALARMAS
// =====================================
const AlarmSystem = {
  /**
   * Crear nueva alarma
   */
  createAlarm(alarmData) {
    const currentUser = StorageManager.get('focusflow_current_user');
    if (!currentUser) {
      showNotification('Debes registrarte primero', 'error');
      return null;
    }

    const alarm = {
      id: generateId(),
      time: alarmData.time,
      message: alarmData.message || '¡Es hora de enfocarte!',
      sound: alarmData.sound || 'default',
      repeat: alarmData.repeat || false,
      repeatInterval: alarmData.repeatInterval || 'daily',
      active: true,
      createdAt: new Date().toISOString()
    };

    const userData = StorageManager.get(`focusflow_data_${currentUser.id}`);
    userData.alarms.push(alarm);
    StorageManager.save(`focusflow_data_${currentUser.id}`, userData);

    showNotification('Alarma creada exitosamente', 'success');
    return alarm;
  },

  /**
   * Activar alarma
   */
  triggerAlarm(alarmId) {
    const currentUser = StorageManager.get('focusflow_current_user');
    if (!currentUser) return;

    const userData = StorageManager.get(`focusflow_data_${currentUser.id}`);
    const alarm = userData.alarms.find(a => a.id === alarmId);

    if (alarm && alarm.active) {
      // Mostrar notificación
      showNotification(alarm.message, 'success');

      // Reproducir sonido (si está habilitado)
      if (userData.settings.sound) {
        this.playAlarmSound(alarm.sound);
      }

      // Si es recurrente, programar siguiente
      if (alarm.repeat) {
        this.scheduleNextAlarm(alarm);
      }
    }
  },

  /**
   * Reproducir sonido de alarma
   */
  playAlarmSound(soundType) {
    // Implementar reproducción de sonido
    console.log(`Reproduciendo sonido: ${soundType}`);
  },

  /**
   * Programar siguiente alarma
   */
  scheduleNextAlarm(alarm) {
    // Implementar lógica de programación
    console.log(`Programando siguiente alarma: ${alarm.id}`);
  }
};

// =====================================// GESTOR DE TAREAS
// =====================================
const TaskManager = {
  /**
   * Crear nueva tarea
   */
  createTask(taskData) {
    const currentUser = StorageManager.get('focusflow_current_user');
    if (!currentUser) {
      showNotification('Debes registrarte primero', 'error');
      return null;
    }

    const task = {
      id: generateId(),
      title: taskData.title,
      description: taskData.description || '',
      priority: taskData.priority || 'medium',
      deadline: taskData.deadline || null,
      category: taskData.category || 'General',
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null
    };

    const userData = StorageManager.get(`focusflow_data_${currentUser.id}`);
    userData.tasks.push(task);
    userData.statistics.totalTasks++;
    StorageManager.save(`focusflow_data_${currentUser.id}`, userData);

    showNotification('Tarea creada exitosamente', 'success');
    return task;
  },

  /**
   * Completar tarea
   */
  completeTask(taskId) {
    const currentUser = StorageManager.get('focusflow_current_user');
    if (!currentUser) return;

    const userData = StorageManager.get(`focusflow_data_${currentUser.id}`);
    const task = userData.tasks.find(t => t.id === taskId);

    if (task && !task.completed) {
      task.completed = true;
      task.completedAt = new Date().toISOString();
      userData.statistics.completedTasks++;
      
      StorageManager.save(`focusflow_data_${currentUser.id}`, userData);

      // Mensaje motivacional
      const motivationalMessages = [
        '¡Excelente trabajo! 🎉',
        '¡Una tarea menos! Sigue así 💪',
        '¡Lo lograste! Eres increíble ⭐',
        '¡Bien hecho! Cada paso cuenta 🌟',
        '¡Fantástico! Continúa con ese ritmo 🚀'
      ];

      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      showNotification(randomMessage, 'success');
    }
  },

  /**
   * Filtrar tareas
   */
  filterTasks(criteria) {
    const currentUser = StorageManager.get('focusflow_current_user');
    if (!currentUser) return [];

    const userData = StorageManager.get(`focusflow_data_${currentUser.id}`);
    let tasks = userData.tasks;

    if (criteria.priority && criteria.priority !== 'all') {
      tasks = tasks.filter(t => t.priority === criteria.priority);
    }

    if (criteria.status === 'completed') {
      tasks = tasks.filter(t => t.completed);
    } else if (criteria.status === 'pending') {
      tasks = tasks.filter(t => !t.completed);
    }

    if (criteria.category && criteria.category !== 'all') {
      tasks = tasks.filter(t => t.category === criteria.category);
    }

    return tasks;
  }
};

// =====================================// TEMPORIZADOR POMODORO
// =====================================
const PomodoroTimer = {
  timer: null,
  timeRemaining: 0,
  isRunning: false,
  currentType: 'work', // 'work' o 'break'

  /**
   * Iniciar Pomodoro
   */
  start(duration = 25) {
    const currentUser = StorageManager.get('focusflow_current_user');
    if (!currentUser) {
      showNotification('Debes registrarte primero', 'error');
      return;
    }

    this.timeRemaining = duration * 60; // Convertir a segundos
    this.isRunning = true;
    this.currentType = 'work';

    showNotification(`Pomodoro iniciado: ${duration} minutos`, 'success');
    this.runTimer();
  },

  /**
   * Ejecutar temporizador
   */
  runTimer() {
    this.timer = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.updateDisplay();
      } else {
        this.complete();
      }
    }, 1000);
  },

  /**
   * Pausar temporizador
   */
  pause() {
    if (this.timer) {
      clearInterval(this.timer);
      this.isRunning = false;
      showNotification('Pomodoro pausado', 'success');
    }
  },

  /**
   * Reanudar temporizador
   */
  resume() {
    if (!this.isRunning && this.timeRemaining > 0) {
      this.isRunning = true;
      this.runTimer();
      showNotification('Pomodoro reanudado', 'success');
    }
  },

  /**
   * Detener temporizador
   */
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.timeRemaining = 0;
      this.isRunning = false;
      showNotification('Pomodoro detenido', 'success');
    }
  },

  /**
   * Completar Pomodoro
   */
  complete() {
    clearInterval(this.timer);
    this.isRunning = false;

    const currentUser = StorageManager.get('focusflow_current_user');
    if (currentUser) {
      const userData = StorageManager.get(`focusflow_data_${currentUser.id}`);
      userData.statistics.totalPomodoros++;
      userData.statistics.totalFocusTime += 25;
      StorageManager.save(`focusflow_data_${currentUser.id}`, userData);
    }

    if (this.currentType === 'work') {
      showNotification('¡Pomodoro completado! Es hora de descansar 🌸', 'success');
      // Ofrecer descanso
      this.offerBreak();
    } else {
      showNotification('¡Descanso completado! Listo para continuar 💪', 'success');
    }
  },

  /**
   * Ofrecer descanso
   */
  offerBreak() {
    // Implementar modal o confirmación para iniciar descanso
    console.log('Ofreciendo descanso de 5 minutos');
  },

  /**
   * Actualizar display
   */
  updateDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    console.log(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  }
};

// =====================================// SIMULACIÓN TDAH
// =====================================

// =====================================// Simulación ahora redirige a página separada de tests
// La funcionalidad de simulación se encuentra en test-concentracion.html

// =====================================
// =====================================// INICIALIZACIÓN
// =====================================
/**
 * Inicializar aplicación cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('FocusFlow inicializado correctamente');

  // Inicializar sistema de simulación
  SimulationSystem.start();

  // Verificar si hay usuario logueado
  const currentUser = StorageManager.get('focusflow_current_user');
  if (currentUser) {
    console.log(`Usuario activo: ${currentUser.name}`);
  }

  // Botón de reiniciar simulación
  const restartBtn = document.getElementById('restartSimulation');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      document.getElementById('simulationResults').style.display = 'none';
      showNotification('Puedes realizar otra simulación', 'success');
    });
  }
});

// =====================================// EXPORTAR FUNCIONES GLOBALES
// =====================================
window.FocusFlow = {
  Storage: StorageManager,
  Alarms: AlarmSystem,
  Tasks: TaskManager,
  Pomodoro: PomodoroTimer,
  Simulation: SimulationSystem,
  showNotification
};

console.log('FocusFlow App cargada exitosamente ✓');


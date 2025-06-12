const coursesData = {

  "open-water-diver": {
    nombre: "Open Water Diver",
    frase: "donde todo comienza",
    descripcion:
      "Tu pasaporte al mundo sumergido. Con este curso de certificación internacional estarás habilitado para bucear en cualquier parte del mundo, hasta una profundidad de 18 metros. Nuestro programa de buceo recreativo Open Water Diver de NAUI está diseñado para que cualquier persona (sin experiencia previa ni habilidades especiales) pueda convertirse en un buzo seguro, autónomo y responsable. En el aula y mediante la modalidad digital E-learning, aprenderás la teoría esencial del buceo. En la pileta practicarás habilidades fundamentales usando una configuración moderna (N-Rec) y equipos de última generación. Los cursos son personalizados, por lo que la duración se adapta a tu ritmo y disponibilidad. Al finalizar, realizarás inmersiones en ambiente natural para consolidar todo lo aprendido.",
    temas: {
      aula: [
        "Equipo de buceo",
        "La física aplicada al buceo",
        "Compensación de la presión",
        "Problemas con la descompresión",
        "Los gases que respiramos"
      ],
      pileta: [
        "Apnea",
        "Compensación de la presión",
        "Ensamble y uso del equipo de buceo",
        "Asistencia a mi compañero"
      ]
    },
    destacado: [
      "8/9 sesiones teóricas de 90 minutos",
      "4/5 sesiones de pileta de 120 minutos"
    ],
    requisitos: [
      "Saber nadar",
      "Buena condición física",
      "Certificado médico",
      "Edad mínima 15 años"
    ],
    incluye: [
      "Kit del alumno",
      "Material de estudio digital",
      "Tablas de descompresión (RGBM y U.S. Navy)",
      "Acceso a E-learning",
      "Equipo completo de vanguardia",
      "Asistencia permanente de instructores y divemasters certificados",
      "Acceso a piscina climatizada",
      "Tramitación de brevet internacional (*)",
      "Bitácora digital de buceo (*)",
      "Diploma (*)"
    ],
    image: "/imagenes/open3.jpg",
  
  },
  "advanced-diver": {
    nombre: "Advanced Scuba Diver",
    frase: "el camino a seguir",
    descripcion:
      "Ahora que sabés bucear, conocé todos los escenarios posibles. Este curso NAUI está dirigido a buzos certificados (de cualquier agencia) que quieran ampliar sus habilidades y conocimientos para realizar inmersiones más complejas (nocturnas, profundas, en naufragios, etc.). Combina teoría en aula y E-learning con prácticas específicas en pileta. Aprenderás a planificar buceos avanzados, usar el compás, desplegar boyas, reflotar objetos y más. La duración se adapta a tu ritmo y disponibilidad.",
    temas: {
      aula: [
        "Fotografía submarina",
        "Orientación bajo el agua",
        "Buceo nocturno",
        "Buceo en naufragios",
        "Buceo profundo",
        "Conservación marina",
        "Búsqueda y reflotamiento"
      ],
      pileta: [
        "Ensamble y uso del equipo de buceo",
        "Navegación por compás",
        "Uso de linternas",
        "Boya de marcación de superficie",
        "Reflotamiento de objetos livianos"
      ]
    },
    destacado: [
      "9/10 sesiones teóricas de 90 minutos",
      "4/5 sesiones de pileta de 120 minutos",
      "Límite de profundidad: 40 metros"
    ],
    requisitos: [
      "Certificación Open Water (cualquier agencia)",
      "[N° mínimo] de inmersiones previas",
      "Saber nadar",
      "Buena condición física",
      "Certificado médico",
      "Edad mínima 15 años"
    ],
    incluye: [
      "Material de estudio digital",
      "Acceso a E-learning",
      "Tablas de descompresión (RGBM y U.S. Navy)",
      "Equipo de buceo completo",
      "Elementos especiales según tipo de buceo",
      "Asistencia permanente de instructores y divemasters certificados",
      "Acceso a piscina climatizada",
      "Tramitación de brevet internacional (*)",
      "Bitácora digital de buceo (*)",
      "Diploma (*)"
    ],
     image: "/imagenes/avanzado3.jpg",
  },
  "master-diver": {
    nombre: "Master Scuba Diver",
    frase: "la ciencia del buceo",
    descripcion:
      "Máximo nivel del buceo recreativo antes del liderazgo. Este curso intensivo profundiza todas las áreas del buceo e incorpora nuevos conocimientos como descompresión avanzada, hipobárico, traje seco y nociones de buceo técnico. Mejorarás habilidades previas, incorporarás el uso de stage (tanque lateral) y ampliarás tu autonomía. Teoría a través del aula y E-learning, combinada con prácticas específicas en piscina. Curso personalizado con duración flexible.",
    temas: {
      aula: [
        "Teoría de la descompresión",
        "Buceo hipobárico",
        "Buceo embarcado",
        "Fisiología del buceo",
        "Buceo nocturno / en naufragios",
        "Nociones de buceo técnico",
        "Procedimientos de emergencia"
      ],
      pileta: [
        "Ensamble y uso del equipo de buceo",
        "Navegación por compás",
        "Uso de linternas",
        "Boya de marcación de superficie",
        "Reflotamiento de objetos livianos",
        "Instalación y uso de stage (tanque lateral)"
      ]
    },
    destacado: [
      "10/12 sesiones teóricas de 90 minutos",
      "5/6 sesiones de pileta de 120 minutos",
      "Uso de stage",
      "7 especialidades"
    ],
    requisitos: [
      "Certificación Advanced + Nitrox (cualquier agencia)",
      "[N° mínimo] de inmersiones previas",
      "Saber nadar",
      "Buena condición física",
      "Certificado médico",
      "Edad mínima 15 años"
    ],
    incluye: [
      "Material de estudio digital",
      "Acceso a E-learning",
      "Tablas de descompresión (RGBM y U.S. Navy)",
      "Equipo de buceo completo",
      "Elementos especiales de buceo",
      "Asistencia permanente de instructores y divemasters certificados",
      "Acceso a piscina climatizada",
      "Tramitación de brevet internacional (*)",
      "Bitácora digital de buceo (*)",
      "Diploma (*)"
    ],
     image: "/imagenes/master2.jpg",
     
    

  },
  "nitrox": {
    nombre: "Nitrox Diver",
    frase: "respirar lo que corresponde",
    descripcion:
      "Planificá y buceá con mezclas con hasta 40% de oxígeno. Este curso NAUI te enseña a elegir la mezcla ideal para cada situación, disminuyendo la absorción de nitrógeno, reduciendo la fatiga y aumentando tu tiempo de fondo. Teoría a través del aula y E-learning. Prácticas con análisis de mezcla, rotulación y configuración del ordenador de buceo.",
    temas: {
      aula: [
        "Fisiología del buceo",
        "Gases respirables",
        "Elección de mezclas óptimas",
        "Tablas Nitrox",
        "Protocolos"
      ],
      pileta: [
        "Análisis del tanque de buceo",
        "Rotulación",
        "Protocolos previos a la inmersión"
      ]
    },
    destacado: [
      "Respirar mezclas adecuadas",
      "Menor absorción de nitrógeno",
      "Menor fatiga celular",
      "Mayor tiempo de fondo",
      "Menor intervalo en superficie",
      "3 sesiones teóricas de 90 minutos",
      "1 práctica de 120 minutos"
    ],
    requisitos: [
      "Certificación Open Water o superior",
      "Saber nadar",
      "Buena condición física",
      "Certificado médico",
      "Edad mínima 15 años"
    ],
    incluye: [
      "Material de estudio digital",
      "Acceso a E-learning",
      "Analizador de oxígeno durante la cursada",
      "Tablas de descompresión Nitrox 32 y 36",
      "Asistencia permanente de instructores y divemasters certificados",
      "Tramitación de brevet internacional (*)",
      "Bitácora digital de buceo (*)",
      "Diploma (*)"
    ],
    image: "/imagenes/nitrox.jpg",
  },
    "dive-master": {
    nombre: "Dive Master",
    frase: "el primer paso hacia el liderazgo",
    descripcion:
      "Este curso es el inicio de tu carrera profesional en el buceo. Como Dive Master certificado, podrás asistir en cursos, liderar grupos y planificar inmersiones. El programa de NAUI combina teoría avanzada, prácticas en pileta y múltiples actividades en ambiente natural, donde aprenderás a gestionar grupos, resolver emergencias y supervisar buceos recreativos. También te preparamos para el rol pedagógico, desarrollando tu capacidad para asistir al instructor en distintas etapas del aprendizaje. Duración personalizada.",
    temas: {
      aula: [
        "Filosofía del buceo NAUI",
        "Supervisión y liderazgo",
        "Planificación de inmersiones",
        "Gestión de riesgos",
        "Resolución de emergencias",
        "Metodología de enseñanza",
        "Organización de cursos y salidas"
      ],
      pileta: [
        "Rescate en superficie y bajo el agua",
        "Demostración de habilidades básicas con calidad pedagógica",
        "Práctica de liderazgo en situaciones simuladas",
        "Supervisión de actividades recreativas"
      ]
    },
    destacado: [
      "Curso profesional NAUI",
      "Certificación internacional habilitante",
      "Capacitación para asistir en cursos e inmersiones",
      "12/15 sesiones teóricas",
      "8/10 prácticas en piscina",
      "Actividades reales con alumnos en formación"
    ],
    requisitos: [
      "Certificación Master Scuba Diver",
      "Certificación Nitrox",
      "[N° mínimo] de inmersiones previas (recomendado 60+)",
      "Saber nadar",
      "Excelente condición física",
      "Certificado médico",
      "Edad mínima 18 años"
    ],
    incluye: [
      "Manual y material de estudio profesional",
      "Acceso a E-learning",
      "Acceso a simulaciones reales con alumnos",
      "Evaluaciones teóricas y prácticas",
      "Supervisión directa de instructores NAUI",
      "Tramitación de credencial profesional (*)",
      "Bitácora profesional digital (*)",
      "Diploma de Dive Master (*)"
    ],
    image: "/imagenes/dive-master.jpg",
  },
    "rescue-diver": {
    nombre: "Rescue Diver",
    frase: "preparado para actuar y ayudar",
    descripcion:
      "Este curso te brinda las habilidades necesarias para prevenir problemas y responder eficazmente ante emergencias subacuáticas. Aprenderás a reconocer signos de estrés, manejar situaciones complicadas bajo el agua y en superficie, y asistir a otros buceadores en peligro. Una formación esencial para quienes quieren bucear de manera segura y cuidar a su grupo.",
    temas: {
      aula: [
        "Prevención de accidentes",
        "Reconocimiento de estrés y fatiga",
        "Planificación de rescates",
        "Emergencias en buceo",
        "Gestión de accidentes",
        "Técnicas de búsqueda y recuperación"
      ],
      pileta: [
        "Auto-rescate",
        "Asistencia en superficie",
        "Remolque y extracción",
        "Atención a buceadores inconscientes",
        "Simulacros de emergencia"
      ]
    },
    destacado: [
      "Curso clave para formación avanzada",
      "Simulacros realistas y progresivos",
      "Entrenamiento en seguridad y liderazgo",
      "Preparación para situaciones reales",
      "Material teórico y práctica constante"
    ],
    requisitos: [
      "Certificación Advanced Scuba Diver o equivalente",
      "Curso de Primeros Auxilios vigente",
      "Saber nadar",
      "Buena condición física",
      "Edad mínima 15 años"
    ],
    incluye: [
      "Manual y acceso a E-learning",
      "Prácticas supervisadas",
      "Simulacros personalizados",
      "Evaluación integral",
      "Diploma NAUI Rescue Diver",
      "Bitácora actualizada"
    ],
    image: "/imagenes/rescue.jpg",
  },
    "intro-to-tech": {
    nombre: "Intro to Tech",
    frase: "una puerta al buceo técnico",
    descripcion:
      "Este curso es ideal para buzos avanzados que buscan perfeccionar su técnica, mejorar su control en el agua y conocer las bases del buceo técnico. Aprenderás a utilizar configuraciones específicas (tipo Hogarthian), dominar la flotabilidad, planificar inmersiones con mayor precisión y adquirir hábitos propios del buceo técnico recreativo. También es una excelente preparación para especialidades más exigentes.",
    temas: {
      aula: [
        "Filosofía del buceo técnico",
        "Configuración del equipo técnico",
        "Planificación avanzada de inmersiones",
        "Gases respirables: aire y nitrox",
        "Gestión de fallas y redundancias"
      ],
      pileta: [
        "Trimado y control fino de flotabilidad",
        "Uso de equipo técnico (bibotella o backplate)",
        "Procedimientos ante fallas simuladas",
        "Propulsión eficiente y uso de aletas",
        "Práctica de señalización y protocolos"
      ]
    },
    destacado: [
      "Base sólida para cursos técnicos futuros",
      "Mejora en técnica y eficiencia subacuática",
      "Entrenamiento intensivo y personalizado",
      "Prácticas con equipo técnico real",
      "Inmersión profunda en estándares de seguridad"
    ],
    requisitos: [
      "Certificación Advanced Scuba Diver",
      "Curso Nitrox (opcional pero recomendado)",
      "Manejo fluido de equipo recreativo",
      "Buena condición física",
      "Edad mínima 16 años"
    ],
    incluye: [
      "Clases teóricas presenciales o E-learning",
      "Sesiones prácticas con equipo técnico",
      "Supervisión personalizada",
      "Evaluación teórico-práctica",
      "Diploma de participación Intro to Tech"
    ],
    image: "/imagenes/tech.jpg",

  },
    "primeros-auxilios": {
    nombre: "Primeros Auxilios",
    frase: "actuar con seguridad puede salvar vidas",
    descripcion:
      "Este curso enseña las habilidades básicas de primeros auxilios y reanimación cardiopulmonar (RCP), enfocadas tanto en accidentes comunes como en situaciones relacionadas al buceo. Es una capacitación esencial para cualquier buzo, instructores en formación o personas que desean estar preparadas para emergencias. Válido como requisito para cursos avanzados como Rescue Diver o Dive Master.",
    temas: {
      aula: [
        "Cadena de supervivencia",
        "Evaluación primaria y secundaria",
        "Reanimación cardiopulmonar (RCP)",
        "Manejo de hemorragias y fracturas",
        "Shock, quemaduras y emergencias médicas",
        "Uso de desfibrilador externo automático (DEA)",
        "Protocolo ante accidentes de buceo"
      ],
      pileta: []
    },
    destacado: [
      "Curso avalado por NAUI",
      "Simulaciones prácticas",
      "Certificación válida por 2 años",
      "Contenido adaptado a buceo y emergencias diarias",
      "Material audiovisual y guías prácticas"
    ],
    requisitos: [
      "No requiere certificación previa",
      "Edad mínima 12 años",
      "Buena disposición para actuar en emergencias"
    ],
    incluye: [
      "Manual de primeros auxilios NAUI",
      "Simulaciones guiadas",
      "Certificado oficial de RCP y Primeros Auxilios",
      "Diploma NAUI de asistencia",
      "Acceso a materiales digitales"
    ]
    ,
    image: "/imagenes/auxilios2.jpg",
  },
  "sidemount-diver": {
  nombre: "Sidemount Diver",
  frase: "libertad y equilibrio bajo el agua",
  descripcion:
    "El curso de buceo Sidemount te enseña a bucear con una o dos botellas montadas a los costados del cuerpo. Esta configuración mejora el equilibrio, optimiza el perfil hidrodinámico y ofrece mayor seguridad por el acceso directo a los reguladores. Ideal para buzos que desean explorar cuevas, naufragios o realizar buceo técnico. Incluye teoría en aula y E-learning, junto con prácticas en pileta utilizando arnés y alas específicas. Aprendé a configurar tu equipo, gestionar el gas eficientemente y moverte con máxima comodidad.",
  temas: {
    aula: [
      "Ventajas del sistema Sidemount",
      "Configuración del equipo",
      "Gestión de gas con múltiples tanques",
      "Procedimientos de emergencia",
      "Hidrodinámica y control del trim"
    ],
    pileta: [
      "Montaje y ajuste del arnés",
      "Control de flotabilidad y trim",
      "Cambio de regulador y gestión de gas",
      "Simulación de fallos y emergencias",
      "Ingreso y egreso del agua con configuración Sidemount"
    ]
  },
  destacado: [
    "Configuración personalizada del equipo",
    "Mayor movilidad y confort",
    "2/3 sesiones teóricas de 90 minutos",
    "2 prácticas en piscina de 120 minutos"
  ],
  requisitos: [
    "Certificación Advanced Diver",
    "[N° mínimo] de inmersiones previas",
    "Saber nadar",
    "Buena condición física",
    "Certificado médico",
    "Edad mínima 15 años"
  ],
  incluye: [
    "Material de estudio digital",
    "Acceso a E-learning",
    "Arnés, alas y equipos específicos",
    "Asistencia permanente de instructores certificados",
    "Tramitación de brevet internacional (*)",
    "Bitácora digital de buceo (*)",
    "Diploma (*)"
  ],
  image: "/imagenes/sidemount.jpg"
},

"freediving": {
  nombre: "Freediving",
  frase: "conectá con tu respiración",
  descripcion:
    "Descubrí el mundo submarino a pulmón. Este curso está diseñado para quienes desean aprender técnicas de apnea segura, mejorar el control de la respiración y explorar sus límites de manera consciente. Ideal para quienes buscan mejorar su rendimiento en el agua, relajarse y fortalecer el vínculo con el medio marino. El curso combina teoría, prácticas en piscina y técnicas de respiración y relajación. No requiere experiencia previa.",
  temas: {
    aula: [
      "Fisiología de la apnea",
      "Técnicas de respiración y relajación",
      "Tipos de apnea (estática, dinámica, profunda)",
      "Igualación de presión",
      "Seguridad y rescate en apnea"
    ],
    pileta: [
      "Apnea estática y dinámica",
      "Respiración diafragmática",
      "Entrenamiento de tolerancia al CO₂",
      "Compensación",
      "Simulación de rescates"
    ]
  },
  destacado: [
    "Curso sin equipos pesados",
    "Mejora la capacidad pulmonar y el autocontrol",
    "3 sesiones teóricas de 90 minutos",
    "2/3 sesiones prácticas de 120 minutos"
  ],
  requisitos: [
    "Saber nadar",
    "Buena salud general",
    "Certificado médico",
    "Edad mínima 15 años"
  ],
  incluye: [
    "Material de estudio digital",
    "Acceso a E-learning",
    "Entrenamiento respiratorio guiado",
    "Asistencia permanente de instructores certificados",
    "Acceso a piscina climatizada",
    "Tramitación de certificación (*)",
    "Diploma (*)"
  ],
  image: "/imagenes/freediving.jpg"
}
};
export default coursesData;
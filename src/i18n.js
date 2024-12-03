import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        skill: "My skills",
        portfolio: "Portfolio",
        contact: "Contact",
        hello: "Hello, It's Me",
        and: "And I'm a ",
        descript: "Passionate about creating intuitive and visually appealing user experiences. With 3 years of experience in web development, I excel in HTML, CSS, TailwindCss, JavaScript and React. I love working in teams and collaborating with designers and backend developers to build efficient and responsive web applications. I am always looking for new challenges that allow me to grow professionally and continue learning in this constantly evolving field.",
        download: "DownLoad CV",
        my: "My",
        skills: "skills",
        tailwind: "I have solid experience creating modern and responsive interfaces. I can quickly style styled components without the need for custom CSS, which speeds up design development and consistency.",
        tailwindext: "I have used Tailwind in many projects to implement scalable and modular design systems, leveraging its utilities to adjust the design precisely and efficiently. My knowledge of this technology enables me to create web applications that not only look great but also perform optimally on different devices and screen sizes.",
        javascript: "JavaScript is one of my main tools. I like to work with this language to create interactive and dynamic web applications. I have developed and maintained many projects using Vanilla Js and modern libraries.",
        javascriptext: "My JavaScript skills include DOM manipulation, event handling, application state management, and integration with external APIs. Additionally, I am familiar with best practices and design patterns, which allow me to write clean, maintainable, and efficient code.",
        github: "GitHub is an essential platform in my daily workflow. It  allows me to manage and track changes in code efficiently. I use it to collaborate with other developers, reviewing and managing pull requests, and resolving conflicts",
        githubext: "effectively to improve code quality and accelerate the development process. My ability to use GitHub effectively ensures that the projects I work on are well-organized, collaborative, and always ready for deployment.",
        react: "I create dynamic and reusable components. My experience includes managing state with links and using libraries like React Router for fluid navigation to create interactive and responsive applications efficiently.",
        reactext: "My expertise in React extends to optimizing component performance, leveraging context API for global state management, and implementing advanced features like lazy loading and code splitting. I am well-versed in following modern development practices to ensure scalability, maintainability, and a seamless user experience.",
        showmore: "Show more",
        showless: "Show less",
        project: "Projects",
        latest: "Latest",
        slot1: "Provincial Police Incident Log",
        slot2: "Portfolio Upgrade to React",
        slot3: "Provincial Police Online Appointment System",
        slot4:"Provincial Police web site",
        slot5: 'PC Game ("gallery")',
        slot6: "Portfolio Javascript Vanilla",
        me: " Me",
        contactme: "Contact",
        fullname: "Full Name",
        email: "Email Address",
        mobilenumber: "Mobile Number",
        emailsubject: "Email Subject",
        message: "Your message",
        sendmessage: "Send Message"
      },
    },
    es: {
      translation: {
        home: "Inicio",
        skill: "Mis habilidades",
        portfolio: "Portafolio",
        contact: "Contacto",
        hello: "Hola, Mi nombre es",
        and: "Y soy ",
        descript: "Entusiasta por crear experiencias de usuario intuitivas y visualmente atractivas. Con 3 años de experiencia en el desarrollo web, domino HTML, CSS, JavaScript y React. Me encanta trabajar en equipo y colaborar con diseñadores y desarrolladores backend para construir aplicaciones web eficientes y responsivas. Siempre estoy en busca de nuevos desafíos que me permitan crecer profesionalmente y seguir aprendiendo en este campo en constante evolución.",
        download: "Descargar CV",
        my: "Mis",
        skills: "habilidades",
        tailwind: "Tengo una sólida experiencia creando interfaces modernas y responsivas. Puedo diseñar rápidamente componentes con estilo sin la necesidad de CSS personalizado, lo que acelera el desarrollo y coherencia del diseño.",
        tailwindext: "He utilizado Tailwind en varios proyectos para implementar sistemas de diseño modulares y escalables, aprovechando sus utilidades para ajustar el diseño de manera precisa y eficiente. Mi conocimiento de esta tecnología me permite crear aplicaciones web que no solo se ven geniales sino que también funcionan de manera óptima en diferentes dispositivos y tamaños de pantalla.",
        javascript: "JavaScript es una de mis principales herramientas. Me gusta trabajar con este lenguaje para crear aplicaciones web interactivas y dinámicas. He desarrollado y mantenido varios proyectos utilizando Vanilla Js y bibliotecas modernas.",
        javascriptext: "Mis habilidades en JavaScript incluyen manipulación DOM, manejo de eventos, administración del estado de aplicaciones e integración con API externas. Además, estoy familiarizado con las mejores prácticas y patrones de diseño, que me permiten escribir código limpio, fácil de mantener y eficiente.",
        github: "GitHub es una herramienta esencial en mi trabajo diario como desarrollador. Tengo experiencia en el uso de Git para control de versiones, esto me permite administrar y rastrear cambios en el código de manera eficiente.",
        githubext: " Lo uso para colaborar con otros desarrolladores, revisar y gestionar solicitudes de extracción y resolver conflictos eficazmente para mejorar la calidad del código y acelerar el proceso de desarrollo. Mi capacidad para utilizar GitHub de forma eficaz garantiza que los proyectos en los que trabajo estén bien organizados, sean colaborativos y siempre estén listos para su implementación.",
        react: "Creo componentes dinámicos y reutilizables. Mi experiencia incluye administro el estado con enlaces y uso bibliotecas como React Router para una navegación fluida para crear aplicaciones interactivas y responsivas de manera eficiente.",
        reactext: "Mi experiencia en React se extiende a la optimización del rendimiento de los componentes, el aprovechamiento de la API de contexto para la gestión del estado global y la implementación de funciones avanzadas como carga diferida y división de código. Estoy bien versado en seguir prácticas de desarrollo modernas para garantizar la escalabilidad, la mantenibilidad y una experiencia de usuario perfecta.",
        showmore: "Mostrar más",
        showless: "Mostrar menos",
        latest: "Ultimos",
        project: "Proyectos",
        slot1: "Libro de Guardia Policial",
        slot2: "Mejora de portafolio a React",
        slot3: "Policia Provincial Sistema de turnos online",
        slot4:"Policia Provincial sitio web",
        slot5: 'PC Game ("galeria")',
        slot6: "Portafolio Javascript Vanilla",
        me: "me",
        contactme: "Contácta",
        fullname: "Nombre Completo",
        email: "Email",
        mobilenumber: "Numero de telefono",
        emailsubject: "Asunto",
        message: "Tu mensaje",
        sendmessage: "Enviar mensaje"
      },
    },
  },
  lng: "en", // Idioma inicial
  fallbackLng: "en", // Idioma predeterminado
  interpolation: {
    escapeValue: false, // No es necesario para React
  },
});

export default i18n;

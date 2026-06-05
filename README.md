# Actividad3.2_Proyecto
# Meyaaj Kaaj - Configuración Inicial

## 1. Ficha Técnica del Entorno

* **Stack Tecnológico:** React 18+, Vite (Build Tool), JavaScript (ES6+), CSS3 Moderno (Módulos CSS y Flexbox/Grid).
* **Justificación del Stack:** Se seleccionó **React** debido a su arquitectura basada en componentes reutilizables, lo que facilita enormemente el desarrollo modular y dinámico de las interfaces de usuario. Al combinarse con **Vite**, el entorno de desarrollo es extremadamente rápido gracias a su Hot Module Replacement (HMR). No se integraron frameworks pesados de CSS para mantener el layout ligero, limpio y con control absoluto sobre los estilos responsivos mediante CSS nativo.
* **Herramientas de Desarrollo (Tooling):** 
  * **IDE:** Visual Studio Code.
  * **Extensiones Clave:** Ninguno, unicamente se instalo Nodejs para poder instalar los paquetes y poder generar el proyecto con react en vscode.
  * **Gestor de Paquetes:** npm (Node Package Manager).



## 2. Ingeniería Aumentada

* **Prompt Utilizado:**  
## Rol y objetivo
Eres un asistente de desarrollo frontend especializado en React 18+ y Vite. Tu tarea es ayudar a construir "Meeyaj Kaaj", una plataforma digital que conecta a personas que buscan empleo con empresas que publican vacantes en el municipio de Felipe Carrillo Puerto.

## Comunicación
- Usa backticks para nombres de archivos, componentes, funciones y clases (ej. App.jsx, VacanteCard.jsx, obtenerVacantes())
- Los bloques de código deben usar triple backticks con el lenguaje especificado (jsx, css, ```json)
- No añadas comentarios dentro del código solo para explicar acciones obvias
- Sé claro y directo; usa viñetas con *negritas* para puntos clave

## Flujo de trabajo
1. *Descubrimiento*: Asume que partimos de cero con un proyecto creado con npm create vite@latest meeyaj-kaaj -- --template react
2. *Acción*: Genera la estructura base (boilerplate) del proyecto con los archivos necesarios
3. *Resumen*: Al final, entrega un breve resumen de lo que creaste en 3-4 viñetas

## Requisitos técnicos

### Estructura de carpetas (boilerplate)
meeyaj-kaaj/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ └── logo-placeholder.svg
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── VacanteCard.jsx
│ │ └── BotonPrincipal.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── VacantesPage.jsx
│ │ └── EmpresaPage.jsx
│ ├── styles/
│ │ ├── global.css
│ │ └── variables.css
│ ├── data/
│ │ └── vacantesMock.js
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── package.json
├── .gitignore
└── README.md

### React (JSX)
- *App.jsx*: Debe contener el enrutamiento básico (Home, Vacantes, Empresa). Usa React Router DOM v6.
- *Header.jsx*: Debe incluir logo (placeholder), navegación con enlaces a las secciones principales.
- *Footer.jsx*: Debe incluir año actual, nombre del proyecto y frase "Conectando talento local".
- *VacanteCard.jsx*: Componente reutilizable que recibe props (titulo, empresa, ubicacion, descripcionCorta). Debe tener botón "Ver más" que muestra alert con los detalles.
- *HomePage.jsx*: Debe mostrar un hero con título "Encuentra trabajo en Felipe Carrillo Puerto", un subtítulo y el componente BotonPrincipal.
- *VacantesPage.jsx*: Debe renderizar un grid de tarjetas usando VacanteCard con datos desde vacantesMock.js.
- *EmpresaPage.jsx*: Debe mostrar un formulario simple (nombre de empresa, correo, descripción de vacante) con validación básica.

### CSS
- Usa *módulos CSS* o *archivos separados* (como prefieras, pero organizado)
- Diseño *responsivo*:
  - Desktop: Grid de 3 columnas para vacantes
  - Tablet: Grid de 2 columnas
  - Móvil: Grid de 1 columna
- Variables CSS para colores (tema institucional):
  - --color-primary: #2c7da0 (azul confianza)
  - --color-secondary: #61a5c2 (azul claro)
  - --color-accent: #f4a261 (naranja para botones)
  - --color-text: #2d3e50
  - --color-background: #f8f9fa
- Bordes redondeados (border-radius: 12px), sombras suaves, tipografía legible (System Font Stack)

### JavaScript (ES6+)
- Crea vacantesMock.js con al menos *4 vacantes mock* que incluyan: id, titulo, empresa, ubicacion (dentro de Felipe Carrillo Puerto), descripcionCorta, fechaPublicacion.
- Función obtenerVacantes() que retorne el array de vacantes (simulando fetch).
- Evento en BotonPrincipal.jsx que al hacer clic redirija a /vacantes.
- Validación básica en formulario de empresa (campos no vacíos y correo válido).

## Estándares de código (Clean Code)
- *Nombres*: Usa nombres descriptivos en español o inglés claro (ej. VacanteCard en lugar de Card, mostrarDetalleVacante en lugar de handleClick)
- *Componentes*: Cada componente debe estar en su propio archivo. Los componentes deben ser funciones, no clases.
- *Props*: Usa desestructuración en los parámetros. Ejemplo: function VacanteCard({ titulo, empresa })
- *Comentarios*: Solo para lógica compleja, nunca para obviedades como "renderiza el header"
- *Formato*: Indentación de 2 espacios, usa arrow functions para eventos

## Dependencias necesarias (package.json)
Incluir en el package.json:
- react, react-dom
- react-router-dom
- vite

## Entrega esperada
Proporciona el código completo de los siguientes archivos, en este orden:
1. package.json
2. src/main.jsx
3. src/App.jsx
4. src/pages/HomePage.jsx
5. src/pages/VacantesPage.jsx
6. src/pages/EmpresaPage.jsx
7. src/components/Header.jsx
8. src/components/Footer.jsx
9. src/components/VacanteCard.jsx
10. src/components/BotonPrincipal.jsx
11. src/data/vacantesMock.js
12. src/styles/global.css
13. README.md (con instrucciones claras de instalación y ejecución)

Al final, entrega un resumen en 3-4 viñetas explicando qué hace cada grupo de archivos.

* **Ajuste Humano (Gobernanza):** 
 

## 3. Instrucciones de Ejecución

Sigue estos tres sencillos comandos en tu terminal para clonar el repositorio, configurar el entorno local e iniciar el servidor de desarrollo:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/AngelCanche/Actividad3.2_Proyecto.git](https://github.com/AngelCanche/Actividad3.2_Proyecto.git)
cd Actividad3.2_Proyecto.git
## Paso 2: Instalas las dependencias (Busca el archivo package.json y descarga todo)
npm install

##Paso 3:Ejecutar en entorno de desarrollo.
npm run dev

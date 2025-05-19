# RIMAC Seguros y Reaseguros

Esto es una prueba tecnica, donde se realiza una aplicacion de cotización de seguros de salud.

# Tecnologias utilizadas

- **React** - Lenguaje Javascript
- **Context API** – Para manejo de estado global
- **Hooks** - Hooks integrados para ciclo de vida del componente, para manejo de estado; Hooks personalizados Para lógica reutilizable

- **SASS** - Preprocesador CSS
- **Module CSS3** -  Para encapsulamiento de estilos a nivel de componente y evitar conflictos de clases

- **Fetch API** - Para consumo de APIs
- **React router dom** - Para rutas de la App.
- **Vite** - herramienta de construcción

## Estructura de carpetas

├── assets/ # Imágenes, logos y fuentes
├── components/ # Componentes reutilizables de UI y formularios
├── context/ # Archivos de Context API para formularios y planes
├── hooks/ # Hooks personalizados (formulario, fetch de APIs)
├── lib/ # Validaciones, mensajes de error, reglas de campos
├── pages/ # Vistas principales de la aplicación
├── routes/ # Definición de rutas y navegación
├── services/ # Funciones para consumir APIs de planes y usuarios
├── styles/ # Archivos SASS para el diseño y estilo de la app
├── utils/ # Funciones auxiliares (formato de fecha, etc.)


## APIs consumidas

- **Usuarios:** Información de la API de Usuarios
- **Planes:** Planes de seguros disponibles para cotizar

## 🧠 Decisiones técnicas

- Se utilizó **Context API** para manejar los datos del formulario (`FormContext`) y el plan seleccionado (`PlanContext`).
- Se optó por **hooks personalizados** para separar la lógica de negocio del componente y mantener el código limpio y reutilizable.
- La estructura del proyecto está pensada para **escalabilidad y mantenibilidad**, separando claramente responsabilidades.

## 🧪 Validación de formularios

Las reglas, errores y validaciones están definidas en `lib/`, y se integran con los hooks personalizados para asegurar una buena experiencia de usuario.


## 📌 Funcionalidades

- Selección de cotización para uno mismo o para otra persona (con descuento automático).
- Cálculo del plan según datos ingresados.
- Resumen dinámico y personalizado del seguro.
- Interfaz responsive adaptada a dispositivos móviles.


## Instalación y ejecución

```bash
npm install
npm run dev
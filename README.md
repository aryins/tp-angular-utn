# Chat App - Angular 17 (UTN TP)

Proyecto de chat interactivo desarrollado con **Angular 17**, utilizando **Standalone Components**, **Signals** para la gestión de estado y el nuevo **Control Flow** (@if, @for).

## 🚀 Instrucciones de Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/aryins/tp-angular-utn.git](https://github.com/aryins/tp-angular-utn.git)
    cd tp-angular-utn
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Correr el servidor de desarrollo:**
    ```bash
    ng serve
    ```
    Accede a `http://localhost:4200` en tu navegador.

## 📁 Estructura del Proyecto

- `src/app/components`: Componentes Standalone (Sidebar, ChatWindow, Message).
- `src/app/services`: `ChatService` centralizado usando **Signals**.
- `src/app/interfaces`: Definiciones de modelos para `Chat` y `Message`.
- `src/app/app.routes.ts`: Configuración de rutas hijas y redirecciones.

## 🛠️ Cómo Probar la Aplicación
1. Al entrar, serás redirigido a `/chats`.
2. Selecciona un chat del Sidebar para ver los mensajes.
3. Envía un mensaje: El sistema actualizará el estado global y disparará una **respuesta automática** del bot después de 2 segundos.
4. Prueba la validación: El botón de enviar se deshabilita si el mensaje está vacío (Reactive Forms).

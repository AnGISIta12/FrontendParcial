# FrontendParcial

Repositorio del frontend para el parcial con Angular.

## Estructura del repositorio

- `README.md`: documentación del proyecto y cómo ejecutarlo.
- `package.json`: dependencias y scripts de npm.
- `angular.json`: configuración del proyecto Angular.
- `tsconfig.json`: configuración de TypeScript.
- `src/`
  - `app/`
    - `components/`: componentes reutilizables.
    - `pages/`: páginas principales de la aplicación.
    - `services/`: servicios para consumir APIs y lógica compartida.
    - `models/`: interfaces y tipos de datos.
    - `app.module.ts`: módulo principal de Angular.
    - `app.component.ts`: componente raíz.
  - `assets/`: imágenes, estilos y recursos estáticos.
  - `environments/`: configuración de entornos (`environment.ts`, `environment.prod.ts`).
  - `index.html`: archivo HTML principal.
  - `styles.scss` o `styles.css`: estilos globales.

## Requisitos

- Node.js 16 o superior.
- npm 8 o superior.
- Angular CLI instalado globalmente (opcional, pero recomendado).

## Instalación

1. Sitúate en la carpeta del proyecto:

```bash
cd "c:\Users\angyl\OneDrive - Pontificia Universidad Javeriana\SEPTIMO SEMESTRE\WEB\FrontendParcial"
```

2. Instala las dependencias:

```bash
npm install
```

## Uso

Para arrancar el servidor de desarrollo:

```bash
ng serve
```

Abre el navegador en:

```text
http://localhost:4200
```

## Scripts comunes

- `npm start` o `ng serve`: iniciar servidor de desarrollo.
- `npm run build`: compilar la aplicación para producción.
- `npm test`: ejecutar pruebas (si están configuradas).
- `npm run lint`: comprobar la calidad del código.

## Notas

- Si se usa otro nombre de proyecto o ruta, ajusta los comandos al directorio correspondiente.
- Mantén la estructura clara para separar componentes, páginas y servicios.

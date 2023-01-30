npm create vite@latest
-vanilla y no react con JS

## para configurar vite

//en terminal
npm install @vitejs/plugin-react -E
npm install react react-dom -E
//crear un archivo vite.config.js y agregar

import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()]
})

//En el archivo main que es el principal se coloca esto

import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('app'))
root.render(contenido)

//Tambien se deben cambiar las extenciones de js a jsx
//indispensable usar linter

npm install standard -D
//en package.json agregar

"eslintConfig": {
"extends": "./node_modules/standard/eslintrc.json"
}

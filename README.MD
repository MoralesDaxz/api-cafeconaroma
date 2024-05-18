└── 📁api-cafeconaroma
    └── .gitignore
    └── 📁db
        └── db-coffee.json
    └── package-lock.json
    └── package.json
    └── README.MD
    └── 📁src
        └── index.js
   
npm run build -> es un comando vacio y nos generara problemas en VERCEL por tanto
es importante gestionar CLI, es un archivo "vercel.json" haremos los siguientes pasos.

1- Tener el repositorio en GitHub
2- npm i -g vercel
3- npm i -g vercel@latest
4- vercel
La estructura cambiara y tambien debemos generar un vercel.json
4- vercel.json en directorio raiz (descripcion abajo)
5- Scripts START deben estar bien configurado
6- Scripts
```
└── 📁api-cafeconaroma
    └── .gitignore
    └── 📁.vercel
        └── project.json
        └── README.txt
    └── 📁db
        └── db-coffee.json
    └── package-lock.json
    └── package.json
    └── README.MD
    └── 📁src
        └── index.js
    └── vercel.json
```
//vercel.json
{
    "version": 2,
    "builds": [
      {
        "src": "src/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/src/index.js"
      }
    ]
  }
  
  //package.json
{
  "name": "api-cafeconaroma",
  "version": "1.0.0",
  "description": "Api para Cafe con Aroma",
  "main": "src/index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "echo 'No build step needed'",
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "keywords": ["node","js"],
  "author": "Alfredo Morales",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}

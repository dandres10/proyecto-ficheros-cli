# Creador de ficheros mediante CLI
En este proyecto vamos a poder crear un fichero introduciendo el nombre y la extensión que deseamos.

## Instrucciones
Para un correcto uso, hay que seguir estas instrucciones.

### Instalación

* GLOBAL
```
npm install -g proyecto-ficheros-cli
```
* LOCAL
```
npm install proyecto-ficheros-cli
```

### Para usarlo
* Global
Ejecutamos **proyecto-ficheros-cli**
* Local
Añadir en el package.json
```
"scripts": {
    "proyecto-ficheros-cli": "./node_modules/.bin/proyecto-ficheros-cli"
},
```
Ejecutamos con
```
npm run proyecto-ficheros-cli
```
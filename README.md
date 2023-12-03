# Equipo 33

- GIANCARLO CORREDOR CATINO - g.corredor2@uniandes.edu.co

# Pre-requisitos
- Node.js >= 18
- ghost-cli >= 1.25.3
- yarn

# Instrucciones para ejecutar Ghost (usando folder provisto en este repositorio)
Con el fin de realizar las pruebas sobre una misma versión de Ghost, y con los mismos datos por defecto, en el directorio `ghost` se encuentra instalada la versión 5.68.0 de esta aplicación.

Dado que las carpetas `node_modules` son ignoradas en el repositorio, el primer paso que debemos dar para ejecutarla es instalar sus dependencias. Desde la raíz de este repositorio ejecutar los siguientes comandos, en el orden en el que se muestran.
``` bash
$ cd ghost/current  # Ingresamos al directorio donde esta Ghost
$ yarn install              # Instalamos las dependencias
$ cd ..                     # Volvemos al directorio raíz de Ghost
$ ghost start               # Ejecutamos la aplicación
```

Ghost está configurado para ejecutarse localmente en el puerto `2368`. Para probar que la aplicación se está ejecutando, desde un navegador web visitamos la siguiente dirección `http://localhost:2368/ghost`, e ingresamos las siguientes credenciales:

|               email                |    password    |
|:----------------------------------:|:--------------:|
| admin@thesoftwaredesigncompany.com | Contraseña123# |

Una vez terminemos de usar la aplicación, podemos detenerla ejecutando
```
$ ghost stop
```

# Instrucciones para ejecutar las pruebas con Cypress
Dado que las carpetas `node_modules` son ignoradas en el repositorio, el primer paso que debemos dar para ejecutar 'cypress' es instalar sus dependencias. Desde la raíz de este repositorio ejecutar los siguientes comandos, en el orden en el que se muestran.
``` bash
$ cd cypress    # Ingresamos al directorio donde esta el proyecto de Cypress
$ npm install   # Instalamos las dependencias
```

Luego de instaladas las dependencias, procedemos a ejecutar las pruebas con el siguiente comando.
```bash
$ npx cypress run --spec cypress/e2e/*
```

# Instrucciones para ejecutar las pruebas con BackstopJS
Dado que las carpetas `node_modules` son ignoradas en el repositorio, el primer paso que debemos dar para ejecutar las pruebas con 'backstopjs' es instalar sus dependencias. Desde la raíz de este repositorio ejecutar los siguientes comandos, en el orden en el que se muestran.

``` bash
$ cd backstopjs # Ingresamos al directorio donde esta el proyecto de Cypress
$ npm install   # Instalamos las dependencias
```

Seguido de esto, debemos configurar las referencias a los dos directorios sobre los cuales vamos a ejecutar las pruebas de regresión visual. Para esto modificamos las lineas 8 y 9 del archivo 'index.js'

``` js
const reference = "../cypress/cypress/screenshots/v5.0.0";  // Directorio con screenshots de referencia
const test = "../cypress/cypress/screenshots/v5.68.0";      // Directorio con screenshots de ABP
```

Procedemos a ejecutar la prueba de regresión visual con el siguiente comando.
``` bash
$ node .\index.js
```

Una vez finalizada la prueba, se generará un reporte html como el del siguiente ejemplo https://github.com/corredorcatino/misw4103-semana-5/tree/main/backstopjs/backstop_data/html_report.
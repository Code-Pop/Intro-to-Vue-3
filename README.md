# Introducción a VUE 3

## ¿Qué es VUE?

<a href="https://vuejs.org/">VUE</a> es un _framework_ progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes.

### Dinámica del curso

Construir una página de un producto, interactiva con el usuario de modo que pueda agregar a un carrito, cambiar colores, cambiar la imagen, ver el stock, y que se encuentre restringido por el mismo.

### ¿Cómo comenzar?

1. Hacer un fork de este repositorio;
2. Clonar el repositorio local;
3. Cambiar entre ramas a medida que avanza el curso.
4. Instalar extensión **es6-string-html**.

### Primeros archivos

* CSS para estilos;
* Imágenes del producto;
* **index.html** importa los estilos;
* Simple script **.js**.

## Primera actividad

Modificar el archivo ***main.js*** con el siguiente script:

```
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks'
        }
    }
})
```

Este script crea la aplicación. El argumento de **Vue.createApp** es un objeto llamado **OBJECT OPTIONS**, encargado de asignar propiedades a la aplicación. Se retorna otro objeto donde se guardan los datos.

## Segunda actividad

Completar el archivo **index.html**, agregando en el _body_:

```
<script>
  const mountedApp = app.mount('#app')
</script>
```

sirviendo para conectar la aplicación a nuestro _DOM_, similar a la etiqueta _div_ con la _ID_.
Luego, modifico la etiqueta _h1_:

```
<h1>{{product}}</h1>
```

significando una expresión, que como título cambiará en base a nuestra aplicación VUE.

## TAREA

Agregar una descripción del producto a la aplicación, y luego mostrarla usando la etiqueta _p_.

## ¿Cómo ejecutar nuestra aplicación?

Desde Visual Studio Code, abro la terminal y escribo el comando:

```
browser index.html
```

ambiando browser por tu navegador.
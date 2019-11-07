# vue-router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Apuntes.

- Para usar __vue-router__ es importarlo en nuestro __main.js__ y usarlo.
- Crear un archivo __routes.js__ e importarlo desde nuestro __main.js__ como una instancia del objeto VueRouter.
    - Nuestro __routes.js__ debe ser exportar un array de objetos que indican el path y el componente que deben cargar cuando se visite la ruta. `{path:'mi_ruta', component: MiRutaComponent}` en esta definición se puede agregar un atributo `props:true` que permite recibir los parametros de la url como props en el componente,
    también se puede usar un atributo `name:'nombreRuta'` el cual se puede usar en el __props__ __to__ como un objeto,
    en el objeto además se pueden pasar __params__ y __query__ `{name:'userEdit', params: {id: id}, query: { locale: 'en', q:100 }}`
- Agregar `<router-vue></router-vue>` en nuestro layout principal, este tag permite renderizar el contenido de nuestros componentes dinamicamente cuando se visite una ruta.
- Cambiar el mode por defecto __hash__ a __history__ para sacar de las url el #
- Para usar links entre páginas usamos en vez de la etiqueta `<a href="#">Link</a>` de html, el componente `<router-link to=""></router-link>` con el props __to__ para indicar la ruta de destino [doc](https://router.vuejs.org/api/)
    - algunos props interesantes para __router-link__
        - __tag__: con este props se puede indicar el elemento html que se creee en vez de un <a>
        - __active-class__: Cambia la clase active por defecto del router-link a la que nosotros queramos.
        - __exact__: el active se activa sólo cuando la ruta se exacta.
    - Si deseamos ir a una ruta especifica desde alguna acción en javascript debemos usar `this.router.push('/mi-ruta')` (tambien se puede pasar un objeto)
- En la definición de las rutas (__routes.js__) podemos usar el atributo children para utilizar rutas hijas
- Se pueden usar multiples `<router-view></router-view>` en la misma vista, nombrandolos y en nuestro __route.js__ usar la llave __components__ en vez de __component__ ej: `{ path: '', components: { default: Home, 'header-top': Header } }` en el ejemplo __header-top__ es el nombre de otro router-view.
- Si una ruta no existe podemos redireccionar usando la siguiente definicón `{ path: '/*', redirect: {name: 'home'} },`


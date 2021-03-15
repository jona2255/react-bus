# Ejercicio Parada bus

- Independientemente de la división en componentes que hagas, al final tiene que quedar cada parte de la interfaz en un componente: uno para el nº de parada, uno para el display, uno para el tiempo para la línea, uno para el formulario de nº de parada y uno para el formulario de tiempo para que llegue la línea.
- Cuando el usuario pulse el botón "Buscar", la app debe conectarse a la API de TMB para ver si la parada existe. Si no existe, en lugar de "Parada nº X" debe poner "No existe la parada X".
- Si existe, arriba debe mostrar "Parada nº X" y debe aparecer el segundo formulario. También debe conectarse a la API de TMB para pedir los próximos buses de la parada.
- El desplegable del segundo formulario debe rellenarse con las líneas que ha devuelto la API.
- En el display debe mostrarse la información de todas las líneas que ha devuelto la API. Sólo se ve una a la vez, y cada 2 segundos tiene que cambiar para mostrar otra (la altura del display es de 30px).
- Si el usuario elige una línea del desplegable del segundo formulario, debe aparecer el mensaje "Tiempo para la línea X: xx minutos".

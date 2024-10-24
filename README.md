Una manera eficiente de generar horarios de clases y contar asistencia
(Actualmente el Scanner funciona solamente si la aplicación se monta en Android, al utilizarlo por navegador no va a solicitar permisos de cámara por lo que el Scan es inválido)



Para usar--> Asegurarse de al clonar el repositorio, descargar los node modules (VSC generalmente salta con una notificacion)
1. git clone https://github.com/gogomezc/APP-MOVILES
2. Ubicarse en Core
3. npm install
4. ionic serve

Si deseas montarlo en Android

1. ionic build
2. npx cap sync
3. npx cap open android
4. En Android Studio, asegurarse de que el celular esté en modo depuración y apretar el botón de "play" luego de que cargue todo.

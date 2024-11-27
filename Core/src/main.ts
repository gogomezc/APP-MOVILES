import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Define un objeto global para las variables de entorno
fetch('./assets/env.json')
  .then((response) => response.json())
  .then((env) => {
    (window as any).__env = env;

    // Activa el modo de producción si está configurado
    if (environment.production) {
      enableProdMode();
    }

    // Inicia la aplicación
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((err) => {
    console.error('Error cargando el archivo env.json', err);
  });

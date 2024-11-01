import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'qrscanner',
    loadChildren: () => import('./qrscanner/qrscanner.module').then( m => m.QrscannerPageModule)
  },
  {
    path: 'qrgenerator/:codigo_web',
    loadChildren: () => import('./qrgenerator/qrgenerator.module').then( m => m.QrgeneratorPageModule)
  },
  {
    path: 'dashboard-profe',
    loadChildren: () => import('./dashboard-profe/dashboard-profe.module').then( m => m.DashboardProfePageModule)
  },
  {
    path: 'cursos-profe',
    loadChildren: () => import('./cursos-profe/cursos-profe.module').then( m => m.CursosProfePageModule)
  },
  {
    path: 'curso-detalle/:id',
    loadChildren: () => import('./curso-detalle/curso-detalle.module').then( m => m.CursoDetallePageModule)
  },
  {
    path: 'clases-curso/:id',
    loadChildren: () => import('./clases-curso/clases-curso.module').then( m => m.ClasesCursoPageModule)
  },
  {
    path: 'crear-curso',
    loadChildren: () => import('./crear-curso/crear-curso.module').then( m => m.CrearCursoPageModule)
  },  {
    path: 'nosotros-alumnos',
    loadChildren: () => import('./nosotros-alumnos/nosotros-alumnos.module').then( m => m.NosotrosAlumnosPageModule)
  },

 





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

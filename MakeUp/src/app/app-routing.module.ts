import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ListadoComponent } from './componentes/listado/listado.component';

const routes: Routes =   [
  { path: '', pathMatch: 'full', component: ListadoComponent },
  { path: 'productos', component: ListadoComponent },
  { path: 'productos/:productoId', component: DetalleComponent },
  { path: '**', redirectTo: '/productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

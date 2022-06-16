import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path: 'inicio', component: InicioComponent},
  {path: 'editar/:Id', component: EditarComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'detalle/:Id', component: DetalleComponent},
  {path: 'busqueda/:nombre', component: BusquedaComponent},      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

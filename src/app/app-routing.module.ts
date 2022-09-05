import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarcomentarioComponent } from './components/agregar-editarcomentario/agregar-editarcomentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  {path: '', component: ListComentariosComponent},
  {path: 'agregar', component: AgregarEditarcomentarioComponent},
  {path: 'editar/:id', component: VerComentarioComponent },
  {path: '**', redirectTo: '', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

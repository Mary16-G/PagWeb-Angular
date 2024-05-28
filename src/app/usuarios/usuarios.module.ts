import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoUsuariosComponent } from './catalogo-usuarios/catalogo-usuarios.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EliminarUsuariosComponent } from './eliminar-usuarios/eliminar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';


@NgModule({
  declarations: [
    CatalogoUsuariosComponent,
    EliminarUsuariosComponent,
    EditarUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class UsuariosModule { }

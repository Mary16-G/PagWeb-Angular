import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProveedorComponent } from './catalogo-proveedor/catalogo-proveedor.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EliminarProveedorComponent } from './eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';


@NgModule({
  declarations: [
    CatalogoProveedorComponent,
    EliminarProveedorComponent,
    EditarProveedorComponent,
    NuevoProveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProveedoresModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatalogoEmpleadosComponent } from './catalogo-empleados/catalogo-empleados.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';

@NgModule({
  declarations: [
    CatalogoEmpleadosComponent,
    EliminarEmpleadoComponent,
    EditarEmpleadoComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EmpleadosModule { }

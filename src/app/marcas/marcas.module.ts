import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatalogoMarcasComponent } from './catalogo-marcas/catalogo-marcas.component';
import { EliminarMarcaComponent } from './eliminar-marca/eliminar-marca.component';
import { EditarMarcaComponent } from './editar-marca/editar-marca.component';
// import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';
import { NuevasMarcasComponent } from './nuevas-marcas/nuevas-marcas.component';



@NgModule({
  declarations: [
    CatalogoMarcasComponent,
    EliminarMarcaComponent,
    EditarMarcaComponent,
    NuevasMarcasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class MarcasModule { }

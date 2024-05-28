import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NuevoproductoComponent } from './nuevoproducto/nuevoproducto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';



@NgModule({
  declarations: [
    CatalogoProductosComponent,
    NuevoproductoComponent,
    EliminarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductosOpticaModule { }

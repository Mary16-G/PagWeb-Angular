import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductosComponent } from './productos-optica/catalogo-productos/catalogo-productos.component';
import { NuevoproductoComponent } from './productos-optica/nuevoproducto/nuevoproducto.component';
import { CatalogoProveedorComponent } from './proveedores/catalogo-proveedor/catalogo-proveedor.component';
import { EliminarProductoComponent } from './productos-optica/eliminar-producto/eliminar-producto.component';
import { EditarProductoComponent } from './productos-optica/editar-producto/editar-producto.component';
import { EliminarProveedorComponent } from './proveedores/eliminar-proveedor/eliminar-proveedor.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { CatalogoMarcasComponent } from './marcas/catalogo-marcas/catalogo-marcas.component';
import { EliminarMarcaComponent } from './marcas/eliminar-marca/eliminar-marca.component';
import { EditarMarcaComponent } from './marcas/editar-marca/editar-marca.component';
import { NuevasMarcasComponent } from './marcas/nuevas-marcas/nuevas-marcas.component';
import { CatalogoEmpleadosComponent } from './empleados/catalogo-empleados/catalogo-empleados.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado/nuevo-empleado.component';
import { CatalogoUsuariosComponent } from './usuarios/catalogo-usuarios/catalogo-usuarios.component';
import { EliminarUsuariosComponent } from './usuarios/eliminar-usuarios/eliminar-usuarios.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';
import { CatalogoClienteComponent } from './clientes/catalogo-cliente/catalogo-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { NuevoClienteComponent } from './clientes/nuevo-cliente/nuevo-cliente.component';

const routes: Routes = [
  {path: 'ProductosCatalogo',component: CatalogoProductosComponent},
  {path: 'NuevoProducto', component: NuevoproductoComponent},
  {path: 'EliminarProducto/:id', component: EliminarProductoComponent},
  {path: 'EditarProducto/:id', component: EditarProductoComponent},

  {path: 'ProveedorCatalogo', component: CatalogoProveedorComponent},
  {path: 'NuevoProveedor', component: NuevoProveedorComponent},
  {path: 'EliminarProveedor/:id', component: EliminarProveedorComponent},
  {path: 'EditarProveedor/:id', component: EditarProveedorComponent},

  {path: 'MarcasCatalogo', component: CatalogoMarcasComponent},
  {path: 'NuevaMarca', component: NuevasMarcasComponent},
  {path: 'EliminarMarca/:id', component: EliminarMarcaComponent},
  {path: 'EditarMarca/:id', component: EditarMarcaComponent},

  {path: 'EmpleadosCatalogo', component: CatalogoEmpleadosComponent},
  {path: 'NuevoEmpleado', component: NuevoEmpleadoComponent},
  {path: 'EliminarEmpleado/:id', component: EliminarEmpleadoComponent},
  {path: 'EditarEmpleado/:id', component: EditarEmpleadoComponent},

  {path: 'UsuariosCatalogo', component: CatalogoUsuariosComponent},
  {path: 'NuevoUsuario', component: NuevoUsuarioComponent},
  {path: 'EliminarUsuario/:id', component: EliminarUsuariosComponent},
  {path: 'EditarUsuario/:id', component: EditarUsuarioComponent},

  {path: 'ClienteCatalogo', component: CatalogoClienteComponent},
  {path: 'NuevoCliente', component: NuevoClienteComponent},
  {path: 'EliminarCliente/:id', component: EliminarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

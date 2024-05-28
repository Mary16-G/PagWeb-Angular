import { Component, OnInit } from '@angular/core';
import { ProveedoresModule } from '../proveedores.module';
import { Proveedor } from 'src/app/modelos/proveedor.modelo';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent {
  constructor(private servicioProv: ProveedoresService,
  private router:Router) {}

  ngOnInit() {
  }
  
  miProveedor: Proveedor = {
    DescuentoPor: '',
    Nombre: '',
    _id: '',
    correo: '',
    provId: 0
  };

  enviarProv() {
    this.servicioProv.agregarProveedor(this.miProveedor)
      .subscribe(data => {
        console.log("proveedor", data);
        if (data) {
          this.router.navigateByUrl('/ProveedorCatalogo');
        } else {
          console.log("error");
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Proveedor } from 'src/app/modelos/proveedor.modelo';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.css']
})
export class EliminarProveedorComponent implements OnInit{

  provId: string | null = null;
  messageErr: any;
  res: any;

  proveedor: Proveedor = {
    DescuentoPor: '',
    Nombre: '',
    _id: '',
    correo: '',
    provId: 0
  }

  constructor(private ruta: Router, private router: ActivatedRoute, private servicioProd: ProveedoresService) { }

  ngOnInit(): void {
    this.provId = this.router.snapshot.paramMap.get('id');
    console.log(this.provId);
  }

  eliminarProveedor(id: string | null) {
    if (id) {
      this.servicioProd.eliminar_prov(id).subscribe(
        () => {
          console.log('Proveedor eliminado correctamente');
          alert('Proveedor eliminado');
          
        },
        error => {
          console.error('Error al eliminar el producto:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del producto es nulo.');
    }
  }
}

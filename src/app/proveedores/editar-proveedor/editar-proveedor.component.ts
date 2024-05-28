import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Proveedor } from 'src/app/modelos/proveedor.modelo';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit{
  proveedorId: string | null = null;
  proveedor: Proveedor = {
    DescuentoPor: '',
    Nombre: '',
    _id: '',
    correo: '',
    provId: 0
  };

  constructor(private route: ActivatedRoute, private proveedorService: ProveedoresService,private router: Router) {}

  ngOnInit(): void {
    this.proveedorId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID del proveedor:', this.proveedorId);
    if (this.proveedorId) {
      this.obtenerProveedorPorId();
    }
  }
  
  obtenerProveedorPorId(): void {
    if (this.proveedorId !== null) {
      this.proveedorService.obtenerProveedorPorId(this.proveedorId).subscribe(data => {
        this.proveedor = data;
      }, error => {
        console.error('Error al obtener el proveedor:', error);
      });
    }
  }

  actualizarProveedor(): void {
    if (this.proveedorId) {
      this.proveedorService.actualizarProveedor(this.proveedorId, this.proveedor).subscribe(response => {
        console.log('Proveedor actualizado:', response);
        this.router.navigateByUrl('/ProveedorCatalogo');
      }, error => {
        console.error('Error al actualizar el proveedor:', error);
      });
    } else {
      console.error("El ID del proveedor es nulo.");
    }
  }
}

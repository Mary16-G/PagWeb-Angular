import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/modelos/proveedor.modelo';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-catalogo-proveedor',
  templateUrl: './catalogo-proveedor.component.html',
  styleUrls: ['./catalogo-proveedor.component.css']
})
export class CatalogoProveedorComponent implements OnInit {

  proveedores: Proveedor[] = [];

  constructor(private proveedoresService: ProveedoresService){}

  ngOnInit(): void {
    this.obtenerProveedor();
  }

  obtenerProveedor():void{
    this.proveedoresService.obtenerProveedores()
    .subscribe(p=>{
      console.log(p);
      this.proveedores=p;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos():void{
    this.productosService.obtenerProductos()
    .subscribe(p=>{
      console.log(p);
      this.productos=p;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/modelos/producto.modelo';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit{

  prodId: string | null = null;
  messageErr: any;
  res: any;

  producto: Producto = {
    Afeccion: [],
    Categoria: {
      IdCategoria: '',
      Nombre: '',
    },
    Color: '',
    Costo: 0,
    Descripcion: [],
    Estilo: '',
    Forma: '',
    Foto: '',
    Marca: 0,
    Material: [],
    Medida: '',
    Nombre: '',
    Origen: '',
    Porcentaje_agua: '',
    Precio: 0,
    Status: '',
    Tipo: '',
    TipodeArmazon: '',
    Uso: '',
    _id: '',
    cantidad_existente: 0,
    fechaAdq: '',
    fechaRegistro: '',
    idProducto: 0,
    imagen: '',
    provId: 0
  }

  constructor(private ruta: Router, private router: ActivatedRoute, private servicioProd: ProductosService) { }

  ngOnInit(): void {
    this.prodId = this.router.snapshot.paramMap.get('id');
    console.log(this.prodId);
  }

  eliminarProducto(id: string | null) {
    if (id) {
      this.servicioProd.eliminar_prod(id).subscribe(
        () => {
          console.log('Producto eliminado correctamente');
          alert('Producto eliminado');
          
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


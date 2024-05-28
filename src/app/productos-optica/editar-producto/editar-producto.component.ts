import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/modelos/producto.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{
  prodId: string | null = null;
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
  constructor(private route: ActivatedRoute, private productosService: ProductosService,private router: Router) {}

  ngOnInit(): void {
    this.prodId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID del producto:', this.prodId);
    if (this.prodId) {
      this.obtenerProductoPorId();
    }
  }
  
  onSubmit() {
    if (this.prodId) {
      this.productosService.actualizarProductoPorId(this.prodId, this.producto).subscribe(response => {
        console.log('Producto actualizado:', response);
        this.router.navigateByUrl('/ProductosCatalogo');
      }, error => {
        console.error('Error al actualizar el producto:', error);
      });
    } else {
      console.error("El ID del producto es nulo.");
    }
  }
  
  obtenerProductoPorId(): void {
    if (this.prodId !== null) {
      this.productosService.obtenerProductoPorId(this.prodId).subscribe(data => {
        this.producto = data;
      }, error => {
        console.error('Error al obtener el producto:', error);
      });
    }
  }
}

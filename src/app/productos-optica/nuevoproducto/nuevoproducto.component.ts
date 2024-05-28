import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.modelo';
import { Proveedor } from 'src/app/modelos/proveedor.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit{
  listaProveedores: Proveedor[] = [];

  constructor(private servicioProv: ProveedoresService,
              private servicioProd: ProductosService,
              private router:Router) {}

  ngOnInit() {
    this.servicioProv.obtenerProveedores()
      .subscribe(data => {
        console.log(data);
        this.listaProveedores = data;
      });
  }

  miProveedor: Proveedor = {
    DescuentoPor: '',
    Nombre: '',
    _id: '',
    correo: '',
    provId: 0
  };

  nuevoProducto: Producto = {
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
  };

  imagen1:any

  get_id_proveedor(id: any) {
    this.nuevoProducto.provId = id;
    console.log(this.nuevoProducto.provId);
  }

  convertir_B64(event: any) {
    //alert(event.target.files[0].name)
    if (event.target.files && event.target.files[0])
    {
    var file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imagen1 =
    reader.result;
    reader.readAsDataURL(file);
    
    }
    }

    enviarProd(){
      this.nuevoProducto.Costo=Number(this.nuevoProducto.Costo)
      this.nuevoProducto.cantidad_existente=Number(this.nuevoProducto.cantidad_existente)
      this.nuevoProducto.Foto=this.imagen1
      console.log(this.nuevoProducto)
      this.servicioProd.new_product(this.nuevoProducto)
      .subscribe(data=>{
      console.log("PRODUCTO", data)
      if (data){
      this.router.navigateByUrl('/ProductosCatalogo')
      }
      else{

      console.log("error")
      }
      })
    }
}

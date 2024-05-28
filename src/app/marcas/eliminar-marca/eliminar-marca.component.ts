import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcasService } from 'src/app/servicios/marcas.service';
import { Marca } from 'src/app/modelos/marcas.modelo';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: ['./eliminar-marca.component.css']
})
export class EliminarMarcaComponent implements OnInit{
  marcaId: string | null = null;
  messageErr: any;
  res: any;

  marca: Marca = {
    _id: '',
    cantidad: 0,
    idMarca: 0,
    logo: '',
    nom_marca: ''
  }

  constructor(private ruta: Router, private router: ActivatedRoute, private servicioMarca: MarcasService) { }

  ngOnInit(): void {
    this.marcaId = this.router.snapshot.paramMap.get('id');
    console.log(this.marcaId);
  }

  eliminarMarca(id: string | null) {
    if (id) {
      this.servicioMarca.eliminar_marca(id).subscribe(
        () => {
          console.log('Marca eliminado correctamente');
          alert('Marca eliminado');
          
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

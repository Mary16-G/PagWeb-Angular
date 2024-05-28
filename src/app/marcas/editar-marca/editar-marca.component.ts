import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcasService } from 'src/app/servicios/marcas.service';
import { Marca } from 'src/app/modelos/marcas.modelo';
@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.css']
})
export class EditarMarcaComponent implements OnInit{
  marcaId: string | null = null;
  marca: Marca = {
    _id: '',
    cantidad: 0,
    idMarca: 0,
    logo: '',
    nom_marca: ''
};

constructor(private route: ActivatedRoute, private marcaService: MarcasService,private router: Router) {}

  ngOnInit(): void {
    this.marcaId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID de la marca:', this.marcaId);
    if (this.marcaId) {
      this.obtenerMarcaPorId();
    }
  }
  
  obtenerMarcaPorId(): void {
    if (this.marcaId !== null) {
      this.marcaService.obtenerMarcaPorId(this.marcaId).subscribe(data => {
        this.marca = data;
      }, error => {
        console.error('Error al obtener el proveedor:', error);
      });
    }
  }

  actualizarMarcas(): void {
    if (this.marcaId) {
      this.marcaService.actualizarMarca(this.marcaId, this.marca).subscribe(response => {
        console.log('Marca actualizado:', response);
        this.router.navigateByUrl('/MarcasCatalogo');
      }, error => {
        console.error('Error al actualizar la marca:', error);
      });
    } else {
      console.error("El ID del proveedor es nulo.");
    }
  }
}
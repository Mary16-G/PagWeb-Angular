import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/modelos/marcas.modelo';
import { MarcasService } from 'src/app/servicios/marcas.service';

@Component({
  selector: 'app-catalogo-marcas',
  templateUrl: './catalogo-marcas.component.html',
  styleUrls: ['./catalogo-marcas.component.css']
})
export class CatalogoMarcasComponent implements OnInit{

  marcas: Marca[]=[];

  constructor(private marcasService: MarcasService){}

  ngOnInit(): void {
    this.obtenerMarcas();
  }

  obtenerMarcas():void{
    this.marcasService.obtenerMarcas()
    .subscribe(p=>{
      console.log(p);
      this.marcas=p;
    })
}
}
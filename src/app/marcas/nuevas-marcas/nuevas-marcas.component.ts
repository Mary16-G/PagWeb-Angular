import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/modelos/marcas.modelo';
import { MarcasService } from 'src/app/servicios/marcas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevas-marcas',
  templateUrl: './nuevas-marcas.component.html',
  styleUrls: ['./nuevas-marcas.component.css']
})
export class NuevasMarcasComponent {
  constructor(private servicioProv: MarcasService,
    private router:Router) {}
  
    ngOnInit() {
    }
    
    miMarca: Marca = {
      _id: '',
      cantidad: 0,
      idMarca: 0,
      logo: '',
      nom_marca: '',
    };
    imagen1:any

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
      
    enviarMarca() {
      this.miMarca.logo=this.imagen1
      this.servicioProv.agregarMarca(this.miMarca)
          console.log(this.miMarca)
          this.servicioProv.agregarMarca(this.miMarca)
          .subscribe(data=>{
          console.log("MARCA", data)
          if (data){
          this.router.navigateByUrl('/MarcasCatalogo')
          }
          else{
    
          console.log("error")
          }
          })
    }
}

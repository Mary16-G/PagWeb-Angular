import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuarios.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  constructor(private servicioUsu: UsuarioService,
    private router:Router) {}

    ngOnInit() {
    }

    nuevoUsuario: Usuario = {
      ApellidoP: '',
      Nombre: '',
      Password: '',
      Rol: '',
      _id: '',
      email: '',
      foto: ''
    };


    imagen2: any
    convertir_B64(event: any) {
      //alert(event.target.files[0].name)
      if (event.target.files && event.target.files[0])
      {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen2 =
      reader.result;
      reader.readAsDataURL(file);
      
      }
      }

      agregarUsuario() {
        this.nuevoUsuario.foto=this.imagen2
        this.servicioUsu.agregarUsuario(this.nuevoUsuario)
            console.log(this.nuevoUsuario)
            this.servicioUsu.agregarUsuario(this.nuevoUsuario)
            .subscribe(data=>{
            console.log("USUARIO", data)
            if (data){
            this.router.navigateByUrl('/UsuariosCatalogo')
            }
            else{
      
            console.log("error")
            }
            })
      }
}

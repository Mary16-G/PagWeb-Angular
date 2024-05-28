import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuarios.modelo';

@Component({
  selector: 'app-eliminar-usuarios',
  templateUrl: './eliminar-usuarios.component.html',
  styleUrls: ['./eliminar-usuarios.component.css']
})
export class EliminarUsuariosComponent implements OnInit{
  usuaId: string | null = null;
  messageErr: any;
  res: any;

  usuario: Usuario = {
    ApellidoP: '',
    Nombre: '',
    Password: '',
    Rol: '',
    _id: '',
    email: '',
    foto: ''
  }

  constructor(private ruta: Router, private router: ActivatedRoute, private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.usuaId = this.router.snapshot.paramMap.get('id');
    console.log(this.usuaId);
  }

  eliminarUsuario(id: string | null) {
    if (id) {
      this.servicioUsuario.eliminar_usuario(id).subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
          alert('Usuario eliminado');
          
        },
        error => {
          console.error('Error al eliminar el Usuario:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del Usuario es nulo.');
    }
  }
}

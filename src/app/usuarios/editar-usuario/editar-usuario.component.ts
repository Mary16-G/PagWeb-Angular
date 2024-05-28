import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuarios.modelo';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  UsuarioId: string | null = null;
  Usuario: Usuario = {
    ApellidoP: '',
    Nombre: '',
    Password: '',
    Rol: '',
    _id: '',
    email: '',
    foto: ''
  };

  constructor(private route: ActivatedRoute, private UsuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.UsuarioId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID del cliente:', this.UsuarioId);
    if (this.UsuarioId) {
      this.obtenerUsuarioPorId();
    }
  }
  
  obtenerUsuarioPorId(): void {
    if (this.UsuarioId !== null) {
      this.UsuarioService.obtenerUsuarioPorId(this.UsuarioId).subscribe(data => {
        this.Usuario = data;
      }, error => {
        console.error('Error al obtener el cliente:', error);
      });
    }
  }

  actualizarUsuario(): void {
    if (this.UsuarioId) {
      this.UsuarioService.actualizarUsuario(this.UsuarioId, this.Usuario).subscribe(response => {
        console.log('Cliente actualizado:', response);
        this.router.navigateByUrl('/UsuariosCatalogo');
      }, error => {
        console.error('Error al actualizar el cliente:', error);
      });
    } else {
      console.error("El ID del cliente es nulo.");
    }
  }
}

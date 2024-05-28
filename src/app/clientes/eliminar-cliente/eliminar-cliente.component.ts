import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent {
  clientId: string | null = null;
  messageErr: any;
  res: any;

  cliente: Cliente = {
    Direccion: '',
    Nombre: '',
    Telefono: '',
    _id: '',
    id: 0
  };

  constructor(private ruta: Router, private router: ActivatedRoute, private servicioClient: ClienteService,private route: Router) { }

  ngOnInit(): void {
    this.clientId = this.router.snapshot.paramMap.get('id');
    console.log(this.clientId);
  }

  eliminarClientes(id: string | null) {
    if (id) {
      this.servicioClient.eliminarCliente(id).subscribe(
        () => {
          console.log('Cliente eliminado correctamente');
          alert('Cliente eliminado');
          
        },
        error => {
          console.error('Error al eliminar el Cliente:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del Cliente es nulo.');
    }
  }
}

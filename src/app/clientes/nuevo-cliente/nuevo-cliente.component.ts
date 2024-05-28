import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/modelos/cliente.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  constructor(private servicioProv: ClienteService,
    private router:Router) {}

    ngOnInit() {
    }

    nuevoCliente: Cliente = {
      Direccion: '',
      Nombre: '',
      Telefono: '',
      _id: '',
      id: 0
    };

    agrClientes() {
      this.servicioProv.agregarCliente(this.nuevoCliente)
        .subscribe(data => {
          console.log("proveedor", data);
          if (data) {
            this.router.navigateByUrl('/ClienteCatalogo');
          } else {
            console.log("error");
          }
        });
    }
}

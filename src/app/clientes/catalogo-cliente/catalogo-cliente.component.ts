import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-catalogo-cliente',
  templateUrl: './catalogo-cliente.component.html',
  styleUrls: ['./catalogo-cliente.component.css']
})
export class CatalogoClienteComponent implements OnInit{
  clientes: Cliente[]=[];

  constructor(private empleadosService: ClienteService){}

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente():void{
    this.empleadosService.obtenerClientes()
    .subscribe(p=>{
      console.log(p);
      this.clientes=p;
    })
}
}

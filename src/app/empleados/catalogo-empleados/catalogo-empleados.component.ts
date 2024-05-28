import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/servicios/empleados.service';
import { Empleado } from 'src/app/modelos/empleados.modelo';


@Component({
  selector: 'app-catalogo-empleados',
  templateUrl: './catalogo-empleados.component.html',
  styleUrls: ['./catalogo-empleados.component.css']
})
export class CatalogoEmpleadosComponent implements OnInit{

  empleados: Empleado[]=[];

  constructor(private empleadosService: EmpleadosService){}

  ngOnInit(): void {
    this.obtenerEmpleado();
  }

  obtenerEmpleado():void{
    this.empleadosService.obtenerEmpleados()
    .subscribe(p=>{
      console.log(p);
      this.empleados=p;
    })
}
}

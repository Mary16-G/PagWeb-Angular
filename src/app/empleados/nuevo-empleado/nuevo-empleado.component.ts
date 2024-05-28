import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelos/empleados.modelo';
import { EmpleadosService } from 'src/app/servicios/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent {
  constructor(private servicioProv: EmpleadosService,
    private router:Router) {}
  
    ngOnInit() {
    }
    
    miempleado: Empleado = {
      ApellidoM: '',
      ApellidoP: '',
      Cargo: '',
      Nombre: '',
      Salario: 0,
      _id: ''
    };
  
    enviarEmple() {
      this.servicioProv.agregarEmpleado(this.miempleado)
        .subscribe(data => {
          console.log("proveedor", data);
          if (data) {
            this.router.navigateByUrl('/EmpleadosCatalogo');
          } else {
            console.log("error");
          }
        });
    }
}

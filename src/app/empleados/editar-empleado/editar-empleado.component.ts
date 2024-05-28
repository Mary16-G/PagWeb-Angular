import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/servicios/empleados.service';
import { Empleado } from 'src/app/modelos/empleados.modelo';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit{
  empleadoId: string | null = null;
  empleado: Empleado = {
    ApellidoM: '',
    ApellidoP: '',
    Cargo: '',
    Nombre: '',
    Salario: 0,
    _id: ''
};

constructor(private route: ActivatedRoute, private empleadoService: EmpleadosService,private router: Router) {}

  ngOnInit(): void {
    this.empleadoId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID del empleado:', this.empleadoId);
    if (this.empleadoId) {
      this.obtenerEmpleadoPorId();
    }
  }
  
  obtenerEmpleadoPorId(): void {
    if (this.empleadoId !== null) {
      this.empleadoService.obtenerEmpleadoPorId(this.empleadoId).subscribe(data => {
        this.empleado = data;
      }, error => {
        console.error('Error al obtener el proveedor:', error);
      });
    }
  }

  actualizarEmpleado(): void {
    if (this.empleadoId) {
      this.empleadoService.actualizarEmpleados(this.empleadoId, this.empleado).subscribe(response => {
        console.log('Empleado actualizado:', response);
        this.router.navigateByUrl('/EmpleadosCatalogo');
      }, error => {
        console.error('Error al actualizar el proveedor:', error);
      });
    } else {
      console.error("El ID del proveedor es nulo.");
    }
  }
}
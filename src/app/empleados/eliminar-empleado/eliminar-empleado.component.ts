import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/servicios/empleados.service';
import { Empleado } from 'src/app/modelos/empleados.modelo';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent implements OnInit{
  empleId: string | null = null;
  messageErr: any;
  res: any;

  empleado: Empleado = {
    ApellidoM: '',
    ApellidoP: '',
    Cargo: '',
    Nombre: '',
    Salario: 0,
    _id: ''
  }

  constructor(private ruta: Router, private router: ActivatedRoute, private servicioEmpleado: EmpleadosService) { }

  ngOnInit(): void {
    this.empleId = this.router.snapshot.paramMap.get('id');
    console.log(this.empleId);
  }

  eliminarEmpleado(id: string | null) {
    if (id) {
      this.servicioEmpleado.eliminar_empleado(id).subscribe(
        () => {
          console.log('Empleado eliminado correctamente');
          alert('Empleado eliminado');
          
        },
        error => {
          console.error('Error al eliminar el producto:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del producto es nulo.');
    }
  }
}

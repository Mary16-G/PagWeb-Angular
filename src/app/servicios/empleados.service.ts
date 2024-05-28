import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleados.modelo';
import { Observable, tap, of, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }

  obtenerEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>('http://127.0.0.1:4000/api/v1/Empleado/get_all');
  }

  agregarEmpleado(proveedor: Empleado): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:4000/Empleado/nuevo', proveedor).pipe(
      tap((res: any) => {
        console.log('Empleado insertado correctamente');
      }),
      catchError(error => {
        console.error('Error al agregar proveedor:', error);
        return throwError(error);
      })
    );
  }

  eliminar_empleado(id: string | null) {
    const apiUrl = 'http://127.0.0.1:4000'; // Definir apiUrl antes de su uso
    const url = `${apiUrl}/Empleado/eliminar/${id}`; // Usar comillas invertidas
    return this.http.delete<any>(url);
  }

  obtenerEmpleadoPorId(id: string): Observable<Empleado> {
    const url = `http://127.0.0.1:4000/api/v1/Empleado/porID/${id}`;
    return this.http.get<Empleado>(url).pipe(
      catchError(error => {
        console.error('Error al obtener proveedor:', error);
        return throwError(error);
      })
    );
  }

  actualizarEmpleados(id: string, proveedor: Empleado): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/Empleado/actualizar/${id}`;
    return this.http.put<any>(url, proveedor).pipe(
      tap(() => {
        console.log('Empleado actualizado correctamente');
      }),
      catchError(error => {
        console.error('Error al actualizar proveedor:', error);
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../modelos/proveedor.modelo';
import { Observable, tap, of, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) { }

  obtenerProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>('http://127.0.0.1:4000/api/v1/provedores/get_all');
  }

  agregarProveedor(proveedor: Proveedor): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:4000/proveedores/nuevo', proveedor).pipe(
      tap((res: any) => {
        console.log('Proveedor insertado correctamente');
      }),
      catchError(error => {
        console.error('Error al agregar proveedor:', error);
        return throwError(error);
      })
    );
  }
  
  obtenerProveedorPorId(id: string): Observable<Proveedor> {
    const url = `http://127.0.0.1:4000/api/v1/proveedores/porID/${id}`;
    return this.http.get<Proveedor>(url).pipe(
      catchError(error => {
        console.error('Error al obtener proveedor:', error);
        return throwError(error);
      })
    );
  }

  actualizarProveedor(id: string, proveedor: Proveedor): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/proveedores/actualizar/${id}`;
    return this.http.put<any>(url, proveedor).pipe(
      tap(() => {
        console.log('Proveedor actualizado correctamente');
      }),
      catchError(error => {
        console.error('Error al actualizar proveedor:', error);
        return throwError(error);
      })
    );
  }
  
  eliminar_prov(id: string | null) {
    const apiUrl = 'http://127.0.0.1:4000'; // Definir apiUrl antes de su uso
    const url = `${apiUrl}/provedores/eliminar/${id}`; // Usar comillas invertidas
    return this.http.delete<any>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca } from '../modelos/marcas.modelo';
import { Observable, tap, of, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http:HttpClient) { }

  obtenerMarcas():Observable<Marca[]>{
    return this.http.get<Marca[]>('http://127.0.0.1:4000/api/v1/marcas/get_all');
  }

  agregarMarca(proveedor: Marca): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:4000/marcas/nuevo', proveedor).pipe(
      tap((res: any) => {
        console.log('Marca insertado correctamente');
      }),
      catchError(error => {
        console.error('Error al agregar proveedor:', error);
        return throwError(error);
      })
    );
  }

  obtenerMarcaPorId(id: string): Observable<Marca> {
    const url = `http://127.0.0.1:4000/api/v1/marca/porID/${id}`;
    return this.http.get<Marca>(url).pipe(
      catchError(error => {
        console.error('Error al obtener proveedor:', error);
        return throwError(error);
      })
    );
  }

  actualizarMarca(id: string, marca: Marca): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/marca/actualizar/${id}`;
    return this.http.put<any>(url, marca).pipe(
      tap(() => {
        console.log('Marca actualizado correctamente');
      }),
      catchError(error => {
        console.error('Error al actualizar proveedor:', error);
        return throwError(error);
      })
    );
  }

  eliminar_marca(id: string | null) {
    const apiUrl = 'http://127.0.0.1:4000'; // Definir apiUrl antes de su uso
    const url = `${apiUrl}/marca/eliminar/${id}`; // Usar comillas invertidas
    return this.http.delete<any>(url);
  }
}

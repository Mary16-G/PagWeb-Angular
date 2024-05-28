import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../modelos/cliente.modelo';
import { Observable, tap, of, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  obtenerClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://127.0.0.1:4000/api/v1/Cliente/get_all');
  }

  agregarCliente(cliente: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:4000/api/v1/clientes', cliente).pipe(
      catchError(error => {
        console.error('Error al agregar cliente:', error);
        return throwError(error);
      })
    );
  }
  
  eliminarCliente(id: string): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/Cliente/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(error => {
        console.error('Error al eliminar cliente:', error);
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto.modelo';
import { Observable, tap, of, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  obtenerProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>('http://127.0.0.1:4000/api/v1/Productos/get_all');
  }

  new_product(miProd:Producto):Observable<any>{
    const headers = { 'Content-Type':
    'application/json' };

    return this.http.post<any>('http://127.0.0.1:4000/productos/nuevoprod', miProd, { headers })//

    .pipe(
      tap((res:any)=>{
      if (res.message=="producto insertado"){
       console.log("servicio",res.message)
      
      }
      }),
        catchError(err=>of("Error al enviar",err.error.message))
      
      )
  }

  eliminar_prod(id: string | null) {
    const apiUrl = 'http://127.0.0.1:4000'; // Definir apiUrl antes de su uso
    const url = `${apiUrl}/productos/eliminar/${id}`; // Usar comillas invertidas
    return this.http.delete<any>(url);
  }
  
  actualizarProductoPorId(id: string, producto: any): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/productos/actualizar/${id}`; // Usa comillas invertidas
    return this.http.put<any>(url, producto).pipe(
      tap((res: any) => {
        console.log('Producto actualizado correctamente');
      }),
      catchError(err => {
        console.error('Error al actualizar producto:', err);
        return throwError(err);
      })
    );
  }

  obtenerProductoPorId(id: string): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/productos/porID/${id}`; // Usa comillas invertidas
    return this.http.get<any>(url);
  }
}


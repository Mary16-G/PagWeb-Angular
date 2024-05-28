import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuarios.modelo';
import { Observable, tap, of, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  
  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://127.0.0.1:4000/api/v1/Usuario/get_all');
  }

  agregarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:4000/api/v1/usuarios/nuevo', usuario).pipe(
      tap(() => {
        console.log('Usuario insertado correctamente');
      }),
      catchError(error => {
        console.error('Error al agregar usuario:', error);
        return throwError(error);
      })
    );
  }
  
  obtenerUsuarioPorId(id: string): Observable<Usuario> {
    const url = `http://127.0.0.1:4000/api/v1/usuarios/porID/${id}`;
    return this.http.get<Usuario>(url).pipe(
      catchError(error => {
        console.error('Error al obtener usuario:', error);
        return throwError(error);
      })
    );
  }

  actualizarUsuario(id: string, usuario: Usuario): Observable<any> {
    const url = `http://127.0.0.1:4000/api/v1/usuarios/actualizar/${id}`;
    return this.http.put<any>(url, usuario).pipe(
      tap(() => {
        console.log('Usuario actualizado correctamente');
      }),
      catchError(error => {
        console.error('Error al actualizar usuario:', error);
        return throwError(error);
      })
    );
  }

  eliminar_usuario(id: string | null) {
    const apiUrl = 'http://127.0.0.1:4000'; // Definir apiUrl antes de su uso
    const url = `${apiUrl}/Usuario/eliminar/${id}`; // Usar comillas invertidas
    return this.http.delete<any>(url);
  }
}

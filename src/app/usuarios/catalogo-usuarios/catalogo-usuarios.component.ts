import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuarios.modelo';

@Component({
  selector: 'app-catalogo-usuarios',
  templateUrl: './catalogo-usuarios.component.html',
  styleUrls: ['./catalogo-usuarios.component.css']
})
export class CatalogoUsuariosComponent implements OnInit{
  usuarios: Usuario[]=[];

  constructor(private usuariosService: UsuarioService){}

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario():void{
    this.usuariosService.obtenerUsuarios()
    .subscribe(p=>{
      console.log(p);
      this.usuarios=p;
    })
}
}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()
  
  constructor(
    public auth: AuthService
   
  ) { }

  ngOnInit() {
  }

  sair(){
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.senha = ''
    environment.idUsuario = 0
    environment.tipo = ''
  
  }

}

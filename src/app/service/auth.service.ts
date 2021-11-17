import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO>{
    return this.http.post<CredenciaisDTO>('https://projetocleanenergy.herokuapp.com/usuarios/logar', credenciais)
  }

  cadastrar(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://projetocleanenergy.herokuapp.com/usuarios/salvar', usuario)
  }

  logado(){
    let ok = false
  
    if(environment.token !=''){
      ok= true
    }
    return ok
  }
}

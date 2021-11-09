import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';

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


}

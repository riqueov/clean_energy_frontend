import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  credenciais: CredenciaisDTO = new CredenciaisDTO()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.credenciais).subscribe((resp: CredenciaisDTO)=>{
      this.credenciais = resp

      environment.token = this.credenciais.token
      environment.nome = this.credenciais.nome
      environment.email = this.credenciais.email
      environment.senha = this.credenciais.senha
      environment.idUsuario = this.credenciais.idUsuario
      
      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.email)
      console.log(environment.senha)
      console.log(environment.idUsuario)

      this.router.navigate(['/entrar'])
    }, erro=>{
      if(erro.status == 500){
        alert('Usuario ou senha incorretos.')
      }
    })
  }

}

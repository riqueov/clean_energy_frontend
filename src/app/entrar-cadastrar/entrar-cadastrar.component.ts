import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-entrar-cadastrar',
  templateUrl: './entrar-cadastrar.component.html',
  styleUrls: ['./entrar-cadastrar.component.css']
})
export class EntrarCadastrarComponent implements OnInit {


 confirmarSenha: string
  usuario: UsuarioModel = new UsuarioModel
  credenciais: CredenciaisDTO = new CredenciaisDTO
  constructor(

    private authService: AuthService,
    private router : Router
  ) { }


  ngOnInit() {
    window.scroll(0,0)
  
}

confirmSenha(event: any){
this.confirmarSenha = event.target.value
}

cadastrar(){


if(this.usuario.senha != this.confirmarSenha){
alert('As senhas são diferentes!!')
}else{
this.authService.cadastrar(this.usuario).subscribe((resp: UsuarioModel)=> {
  this.usuario = resp
  this.router.navigate(['/entrar'])
  alert('Usuário cadastrado com sucesso!')
})
}

}

entrar(){
  this.authService.entrar(this.credenciais).subscribe((resp: CredenciaisDTO)=>{
    this.credenciais = resp

    environment.token = this.credenciais.token
    environment.nome = this.credenciais.nome
    environment.email = this.credenciais.email
    environment.senha = this.credenciais.senha
    environment.idUsuario = this.credenciais.idUsuario
    environment.tipo = this.credenciais.tipo

  
    console.log(environment.token)
    console.log(environment.nome)
    console.log(environment.email)
   
    console.log(environment.idUsuario)

    this.router.navigate(['/inicio'])
  }, erro=>{
    if(erro.status == 400){
      alert('Usuario ou senha incorretos.')
    }
  })
}


}
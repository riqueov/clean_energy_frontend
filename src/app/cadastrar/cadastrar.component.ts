import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


 confirmarSenha: string
  usuario: UsuarioModel = new UsuarioModel
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

}

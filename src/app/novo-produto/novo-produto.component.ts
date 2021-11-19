import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertComponent } from '../alert/alert.component';
import { CategoriaModel } from '../model/CategoriaModel';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { ProdutoModel } from '../model/ProdutoModel';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertService } from '../service/alert.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel

  listaCategoria: CategoriaModel[]
  idCat: number
  categoria: CategoriaModel = new CategoriaModel()

  usuario: UsuarioModel = new UsuarioModel
  idUser = environment.idUsuario

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertService
  ) { }

  ngOnInit() {

    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()

    this.getAllCategoria()
  }
  
  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listaCategoria = resp
    })
  }

  finByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCat).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      console.log(this.idCat)
    })
  }

  cadastrarProduto() {
    this.categoria.idCategoria = this.idCat
    this.produto.categoria = this.categoria

    this.usuario.idUsuario = this.idUser
    this.produto.usuario = this.usuario

    console.log(environment)

    this.produtoService.postProduto(this.produto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
      this.alert.showAlertSuccess('Produto cadastrado com sucesso!')
      // Limpa os campos
      this.produto = new ProdutoModel()
    })
  }



}

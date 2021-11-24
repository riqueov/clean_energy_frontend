import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { ProdutoModel } from 'src/app/model/ProdutoModel';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel()
  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]
  idCat: number

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService


  ) { }

  ngOnInit(){
  
    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()

  let id = this.route.snapshot.params['id']
  this.findByIdProduto(id)

  this.getAllCategoria()
  
  
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listaCategoria = resp
    })
  }

  findByIdProduto(id: number){
this.produtoService.getByIdProdutos(id).subscribe((resp : ProdutoModel) =>{
  this.produto = resp
})
  }

  finByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCat).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      console.log(this.idCat)
    })
  }

  atualizar(){
    this.categoria.idCategoria = this.idCat
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp: ProdutoModel) => {
      this.produto = resp
      alert('Produto atualizado')
      this.router.navigate(['/produtos'])
    })

  }







}

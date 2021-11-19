import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { ProdutoModel } from 'src/app/model/ProdutoModel';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-delet',
  templateUrl: './produto-delet.component.html',
  styleUrls: ['./produto-delet.component.css']
})
export class ProdutoDeletComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel()
  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]
  idCat: number
  idPost: number
  
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
  
    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()

  this.idPost = this.route.snapshot.params['id']
  this.findByIdProduto(this.idPost)

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

  apagar(){
    this.produtoService.deleteProduto(this.idPost).subscribe(() => {
      alert('Produto apagado')
      this.router.navigate(['/produtos'])

    })
    

  }

}

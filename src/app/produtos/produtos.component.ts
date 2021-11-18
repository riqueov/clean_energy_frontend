import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../model/ProdutoModel';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProduto: ProdutoModel[]

  
  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listaProduto = resp
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutoModel } from '../model/ProdutoModel';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhe-categoria',
  templateUrl: './detalhe-categoria.component.html',
  styleUrls: ['./detalhe-categoria.component.css']
})
export class DetalheCategoriaComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel()
  listaProduto: ProdutoModel[]

  categoria: CategoriaModel = new CategoriaModel()
  idCat: number

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()

    this.idCat = this.route.snapshot.params['id']
    this.getCategoriaById

    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listaProduto = resp
    })
  }

  getCategoriaById() {
    this.categoriaService.getByIdCategoria(this.idCat).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
    })
  }

}

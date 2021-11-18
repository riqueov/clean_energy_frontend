import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../model/ProdutoModel';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaModel } from '../model/CategoriaModel';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listaCategoria: CategoriaModel[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.categoriaService.refreshToken()
    this.findAllCategorias()
  
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) =>{
      this.listaCategoria = resp
    })
  }

  cadastrarCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp : CategoriaModel) =>{
      this.categoria = resp
      alert('Categoria cadastrada')
      this.categoria = new CategoriaModel()
      this.findAllCategorias
    })
  }



}

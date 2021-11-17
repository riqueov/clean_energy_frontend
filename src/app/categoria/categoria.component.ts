import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  listaCategorias: CategoriaModel[]

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
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrarCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: CategoriaModel) => {
      this.categoria = resp
      alert('Categoria cadastrado, meu bom... ♥')
      this.categoria = new CategoriaModel()
      this.findAllCategorias()
    })
  }

  





}

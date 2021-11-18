import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-delet',
  templateUrl: './categoria-delet.component.html',
  styleUrls: ['./categoria-delet.component.css']
})
export class CategoriaDeletComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel()
  idCategoria: number
  nomeCategoria: string

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
 
this.idCategoria = this.route.snapshot.params['id']
 this.findByIdCategoria(this.idCategoria)
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp : CategoriaModel) =>{
      this.categoria = resp
      

    })
  }

  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(() =>{
      alert('Categoria apagada')
      this.router.navigate(['/categorias'])
    })
  }
}

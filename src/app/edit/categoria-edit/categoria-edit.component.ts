import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/model/CategoriaModel';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {


  categoria : CategoriaModel = new CategoriaModel()

  constructor(
    private categoriaService : CategoriaService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
  
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
    
    let nome = this.route.snapshot.params['nome']
    this.findByIdCategoria(nome)
  }


  findByIdCategoria(id: number){
   this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaModel) =>{
     this.categoria = resp })
 }

 atualizar(){
   this.categoriaService.putCategoria(this.categoria).subscribe((resp :CategoriaModel)=> {
     this.categoria = resp
     alert('Categoria atualizada')
     this.router.navigate(['/categorias'])
   })
 }
  
}

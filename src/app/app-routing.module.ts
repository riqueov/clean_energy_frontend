import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [

    { path: 'nova-categoria', component: NovaCategoriaComponent},
    { path: 'categorias', component: CategoriasComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'novo-produto', component: NovoProdutoComponent},
    { path: 'perfil', component: PerfilComponent},
 
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './categorias/categorias.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutosComponent } from './produtos/produtos.component';

import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EntrarCadastrarComponent } from './entrar-cadastrar/entrar-cadastrar.component';


const routes: Routes = [

    { path: 'nova-categoria', component: NovaCategoriaComponent},
    { path: 'categorias', component: CategoriasComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'novo-produto', component: NovoProdutoComponent},
    { path: 'perfil', component: PerfilComponent},
    {path: 'inicio', component: InicioComponent },
    {path: 'entrar-cadastrar', component: EntrarCadastrarComponent },
    {path: 'sobre', component: SobreComponent },
    {path: 'cadastrar', component: CadastrarComponent },
    {path: 'categoria', component: CategoriaComponent},
    {path: 'produto', component: ProdutoComponent},



];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
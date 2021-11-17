import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';



import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
{path: '', redirectTo: 'inicio', pathMatch: 'full'},   
{path: 'inicio', component: InicioComponent },
{path: 'entrar', component: EntrarComponent },
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
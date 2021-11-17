import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';

import { MenuComponent } from './menu/menu.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuAdminLateralComponent } from './menu-admin-lateral/menu-admin-lateral.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';


@NgModule({
  declarations: [
    AppComponent,

    CadastrarComponent,
    SobreComponent,
    MenuComponent,
    MenuAdminComponent,
    MenuAdminLateralComponent,
    PerfilComponent,
    CategoriasComponent,
    ProdutosComponent,
    NovaCategoriaComponent,
    NovoProdutoComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

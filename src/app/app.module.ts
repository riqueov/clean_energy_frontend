import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { MenuComponent } from './menu/menu.component';
import { MenuAdminLateralComponent } from './menu-admin-lateral/menu-admin-lateral.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { EntrarCadastrarComponent } from './entrar-cadastrar/entrar-cadastrar.component';
import { CategoriaDeletComponent } from './delet/categoria-delet/categoria-delet.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RodapeComponent,
    CadastrarComponent,
    SobreComponent,
    MenuComponent,
    MenuAdminLateralComponent,
    PerfilComponent,
    CategoriasComponent,
    ProdutosComponent,
    NovaCategoriaComponent,
    NovoProdutoComponent,
    EntrarCadastrarComponent,
    CategoriaDeletComponent,
    CategoriaEditComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

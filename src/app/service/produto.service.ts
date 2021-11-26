import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutoModel } from '../model/ProdutoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllCategoria(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]> ('https://projetocleanenergy.herokuapp.com/produtos', this.token)
  }
  
  
  getAllProduto(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]> ('https://projetocleanenergy.herokuapp.com/produtos', this.token)
  }

  getByIdProdutos(id: number): Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(`https://projetocleanenergy.herokuapp.com/produtos/id/${id}`, this.token)
  }
  postProduto(produto: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>('https://projetocleanenergy.herokuapp.com/produtos',produto, this.token)
  }

  putProduto(produto:ProdutoModel): Observable<ProdutoModel>{
    return this.http.put<ProdutoModel>('https://projetocleanenergy.herokuapp.com/produtos',produto, this.token)
  }

  deleteProduto(id:number){
    return this.http.delete(`https://projetocleanenergy.herokuapp.com/produtos/${id}`, this.token)
  }



}

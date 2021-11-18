import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

  getAllCategoria(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]> ('https://projetocleanenergy.herokuapp.com/produtos', this.token)
  }

  postProduto(produto: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>('https://projetocleanenergy.herokuapp.com/produtos',produto, this.token)
  }

  getAllProduto(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]> ('https://projetocleanenergy.herokuapp.com/produtos', this.token)
  }

}

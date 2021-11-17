import { ProdutoModel } from "./ProdutoModel"

export class CategoriaModel{
    public idCategoria: number 
    public material: string
    public nome: string
    public potencia: string
    public produtosCategoria : ProdutoModel[]

}
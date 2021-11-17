import { CategoriaModel } from "./CategoriaModel"
import { UsuarioModel } from "./UsuarioModel"

export class ProdutoModel{
    public idProduto: number
    public imagem: string
    public nome: string
    public preco: number
    public quantidade: number
    public categoria : CategoriaModel
    public usuario : UsuarioModel
}
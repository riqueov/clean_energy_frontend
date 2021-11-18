import { CategoriaModel } from "./CategoriaModel"
import { UsuarioModel } from "./UsuarioModel"

export class ProdutoModel{
    public idProduto: number
    public imagem: string
    public nome: string
    public preco: number
    public descricao: string
    public categoria : CategoriaModel
    public usuario : UsuarioModel
}
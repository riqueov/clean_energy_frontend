import { ProdutoModel } from "./ProdutoModel"

export class UsuarioModel{
    public email: string
    public idUsuario: number
    public nomeCompleto: string
    public senha: string
    produtosUsuarios : ProdutoModel[]
}
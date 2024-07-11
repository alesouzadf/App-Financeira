import { CryptoProvider } from "core"
import bcrypt from 'bcrypt'

export default class ProvedorCriptografiaBcrypt implements CryptoProvider {
    
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }
    
    comparar(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha, senhaCriptografada)
    }
    
}
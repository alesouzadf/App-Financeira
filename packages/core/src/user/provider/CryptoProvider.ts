export default interface CryptoProvider {
    criptografar(senha: string): string
    comparar(senha: string, senhaCriptografada: string): boolean
}
export default class Erros {
    static tratar(e: any): any {
        if (e instanceof Array) return e
        if (e instanceof Error) {
            return [{ codigo: 'ERRO_DESCONHECIDO', mensagem: e.message }]
        }
        return [{ codigo: 'ERRO_DESCONHECIDO' }]
    }
}
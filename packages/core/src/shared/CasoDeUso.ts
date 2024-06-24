import { Transacao } from "../transacao"

export default interface CasoDeUso<E, S> {
    executar(entrada: E, Transacao?: Transacao): Promise<S>
}
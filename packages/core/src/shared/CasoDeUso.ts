import Transaction from "../transaction/model/Transaction";

export default interface CasoDeUso<E, S> {
    executar(entrada?: E, transaction?: Transaction): Promise<S>
}
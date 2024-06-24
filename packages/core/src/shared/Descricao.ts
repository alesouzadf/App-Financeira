import TextoSimples from "./TextoSimples"
import Validador from "./Validador"

export default class Descricao extends TextoSimples {
    constructor(
        readonly texto: string,
        atributo?: string,
        objeto?: string,
    ) {
        super(texto, 5, 70, atributo, objeto)
    
        Validador.valor(texto, atributo, objeto)
            .regex(/^[a-zA-ZÀ-ú'\.-\s]*$/, "CARACTERES_INVALIDOS")
            .lancarSeErro()
    }
}
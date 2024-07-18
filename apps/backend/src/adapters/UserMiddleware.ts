import { RepositoryUser } from "core"
import { Request, Response, NextFunction } from "express"
import { UserDTO } from "adapters"
import ProvedorJWT from "../external/auth/ProvedorJWT"

export default function UsuarioMiddleware(params: {
    repoUser: RepositoryUser
    provedorJWT: ProvedorJWT
}) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const acessoNegado = () => res.status(403).json([{ codigo: "TOKEN_INVALIDO" }])

        try {
            const token = req.headers.authorization?.replace("Bearer ", "")

            if (!token) {
                acessoNegado()
                return
            }

            const usuarioToken = params.provedorJWT.validar(token) as UserDTO
            const usuario = await params.repoUser.getByEmail(
                usuarioToken.email!,
            )
            
            if (!usuario) {
                acessoNegado()
                return
            }

            ; (req as any).usuario = {
                id: usuarioToken.id,
                nome: usuario.name.completo,
                email: usuario.email.valor,
            }

            next()
            
        } catch (e) {
            acessoNegado()
        }
    }
}
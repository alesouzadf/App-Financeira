import { PrismaClient } from '@prisma/client'
import { RepositoryUser, User } from 'core'

export default class RepositorioUsuarioPrisma implements RepositoryUser {
  
  private readonly prisma = new PrismaClient()
  
  async buscarTudo(): Promise<User[]> {
    const Usuarios = await this.prisma.user.findMany()
    return Usuarios as any
  }
  
  async save(Usuario: User): Promise<User> {
    const newUsuario = await this.prisma.user.upsert({
      where: { id: Usuario.id ?? -1  },
      update: Usuario.props,
      create: Usuario.props as any,
    })
    return new User(newUsuario)
  }
  
  async obterPorId(id: number): Promise<User | null> {
    const UsuarioData = await this.prisma.user.findUnique({ where: { id } })
    
    if (!UsuarioData) {
      throw new Error(`Usuário com o id ${id} não encontrado`)
    }
    
    return new User(UsuarioData)
  }
  
  async getByEmail(email: string): Promise<User | null> {
    const UsuarioData = await this.prisma.user.findUnique({ where: { email } })
    
    if (!UsuarioData) {
      return null
    }
    
    return new User(UsuarioData)
  }

  update(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
import User from "../model/User";

export default interface RepositoryUser {
    save(user: User): Promise<User>
    getByEmail(email: string): Promise<User | null>
    buscarTudo(): Promise<User[]>
}
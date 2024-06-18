import { somar } from "../src"

test('Deve retornar o resultad da soma', () => {
    expect(somar(1, 2)).toBe(3)
})
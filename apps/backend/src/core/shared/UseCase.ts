export default interface UseCase<I, O> {
  toExecute(input: I): Promise<O>;
}
// I = input(entrada)
// O = output(saída)

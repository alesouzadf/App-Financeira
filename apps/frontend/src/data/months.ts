enum Months {
  Janeiro = 0,
  Fevereiro = 1,
  Março = 2,
  Abril = 3,
  Maio = 4,
  Junho = 5,
  Julho = 6,
  Agosto = 7,
  Setembro = 8,
  Outubro = 9,
  Novembro = 10,
  Dezembro = 11,
}

export default function getNameMonth(numberMonth: number): string {
  return Months[numberMonth];
}

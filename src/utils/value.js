export function valueToPrice(value) {
  const numberValue = parseFloat(`${value}`).toFixed(2).replace('.', ',');

  return `R$ ${numberValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

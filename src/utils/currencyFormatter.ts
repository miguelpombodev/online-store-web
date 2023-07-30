export default function currencyFormatter(value: number) {
  const toBRLMoney = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  });

  return toBRLMoney.format(value);
}

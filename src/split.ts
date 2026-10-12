export type Line = { amount: number };
export function decimalsFor(currency: string): number {
  return new Intl.NumberFormat("en", { style: "currency", currency })
    .resolvedOptions().maximumFractionDigits ?? 2;
}
export function splitTotal(lines: Line[], currency: string): string {
  const decimals = decimalsFor(currency);
  return lines.map(line => line.amount.toFixed(decimals)).join(",");
}

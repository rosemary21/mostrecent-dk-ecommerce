/* eslint-disable react-refresh/only-export-components */

export default function formatCurrency(amount: number | string | undefined) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(Number(amount));
}

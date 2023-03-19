export const generateBankAccountNumber = (length: number) => {
  return Array(length)
    .fill(0)
    .map(() => Math.floor(Math.random() * 9 + 1))
    .join('');
};

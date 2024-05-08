export const addCommaNumbers = (data: string) => {
  const number = parseFloat(data);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0, // Set decimal places
    maximumFractionDigits: 2,
  });

  const formattedNumber = formatter.format(number || 0);

  return formattedNumber;
}
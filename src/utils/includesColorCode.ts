const includesColorCode = (color: string) => {
  if (color === 'Preta') return (color = '#000000');
  if (color === 'Laranja') return (color = '#f16323');
  if (color === 'Amarela') return (color = '#F7F73E');
  if (color === 'Rosa') return (color = '#EF3EF7');
  if (color === 'Cinza') return (color = '#E3F3ED');
  if (color === 'Azul') return (color = '#7DAEF0');
  if (color === 'Bege') return (color = '#E08743');
};

export default includesColorCode;

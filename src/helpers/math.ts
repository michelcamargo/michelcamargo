export const randomXToY = (min: number, max: number) => {
  const randVal = min+(Math.random()*(max-min));
  return Math.round(randVal);
};

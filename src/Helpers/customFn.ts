export const getRandomArrElement = (): Record<string, number> => {
  const arrPrizes: number[] = [1, 2, 3, 4, 5, 6];
  const firstRndItem: number =
    arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
  const secondRndItem: number =
    arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
  const thirdRndItem: number =
    arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
  return {
    firstRndItem: firstRndItem,
    secondRndItem: secondRndItem,
    thirdRndItem: thirdRndItem,
  };
};

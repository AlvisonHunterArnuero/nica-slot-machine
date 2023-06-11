import { PrizeRecord, verifyWinnerProps } from '../Types';
export const getRandomArrElement = (): PrizeRecord => {
  const arrPrizes: number[] = [1, 2, 3];
  const firstRndItem: number = arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
  const secondRndItem: number = arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
  const thirdRndItem: number = arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
  return {
    firstRndItem,
    secondRndItem,
    thirdRndItem,
  };
};

export const verifyWinner = ({ elements }: verifyWinnerProps) => {
  const result = (elements[0] === elements[1]) === true && (elements[1] === elements[2]) === true ? true : false;
  return result;
};

export const playSound = async (args: HTMLAudioElement): Promise<void> => {
  args.pause();
  args.currentTime = 0;
  args.play();
};

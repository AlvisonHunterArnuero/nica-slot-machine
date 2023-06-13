import { EmotionalExpression, EmotionalExpressionProps, verifyWinnerProps } from '../Types';

export const getRandomArrElement = (): EmotionalExpressionProps => {
  const arrSlotMachineReelSymbols: number[] = [1, 2, 3];
  const firstRndItem: number = arrSlotMachineReelSymbols[Math.floor(Math.random() * arrSlotMachineReelSymbols.length)];
  const secondRndItem: number = arrSlotMachineReelSymbols[Math.floor(Math.random() * arrSlotMachineReelSymbols.length)];
  const thirdRndItem: number = arrSlotMachineReelSymbols[Math.floor(Math.random() * arrSlotMachineReelSymbols.length)];
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

export const getEmotionalExpression = ({
  firstRndItem,
  secondRndItem,
  thirdRndItem,
}: EmotionalExpressionProps): EmotionalExpression => {
  let emotionalExpression: EmotionalExpression;

  switch (true) {
    case firstRndItem === secondRndItem:
      emotionalExpression = 'what';
      break;
    case firstRndItem === thirdRndItem:
      emotionalExpression = 'uff';
      break;
    case secondRndItem === thirdRndItem:
      emotionalExpression = 'doubt';
      break;
    default:
      emotionalExpression = 'mad';
  }

  return emotionalExpression;
};

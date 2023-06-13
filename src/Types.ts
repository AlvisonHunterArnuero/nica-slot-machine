export type SpinButtonProps = {
  spinBtnClickHandler: () => void;
  hasWon: boolean;
};

export type MainTitleProps = {
  title: string;
};

export type ExpressionsProps = {
  currentEmotionalExpression: string;
};

export type SlotMachineProps = {
  elements: number[];
};

export type WinNotificationProps = {
  hasWon: boolean;
};

export type EmotionalExpressionProps = {
  firstRndItem: number;
  secondRndItem: number;
  thirdRndItem: number;
};

export type verifyWinnerProps = {
  elements: number[];
};

export type EmotionalExpression = 'happy' | 'what' | 'uff' | 'doubt' | 'mad';

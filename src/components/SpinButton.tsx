import { SpinButtonProps } from '../Types';

export const SpinButton = ({ spinBtnClickHandler, hasWon }: SpinButtonProps) => {
  return (
    <button onClick={spinBtnClickHandler} className="spinButton">
      {hasWon ? 'Restart Game' : 'Spin It!'}
    </button>
  );
};

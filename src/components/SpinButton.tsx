import { SpinButtonProps } from '../Types';

export const SpinButton = ({ spinBtnClickHandler, hasWon }: SpinButtonProps) => {
  return (
    <button onClick={spinBtnClickHandler} className="custom-spin-btn">
      {hasWon ? 'Restart Game' : 'Spin It!'}
    </button>
  );
};

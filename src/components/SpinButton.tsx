import { SpinButtonProps } from "../Types";

export const SpinButton = ({ handleClick, hasWon }: SpinButtonProps) => {
  return (
    <button onClick={handleClick} className="spinButton">
      {hasWon ? "Restart Game" : "Spin It!"}
    </button>
  );
};

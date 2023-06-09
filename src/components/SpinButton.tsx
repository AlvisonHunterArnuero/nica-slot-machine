import { SpinButtonProps } from "../Types"

export const SpinButton = ({ handleClick, hasWon }: SpinButtonProps) => {
  return (
    <button onClick={handleClick} className='spinButton hover: hover:text-gray-100'>
      {hasWon ? "Restart Game" : "Spin It!"}
    </button>
  )
}

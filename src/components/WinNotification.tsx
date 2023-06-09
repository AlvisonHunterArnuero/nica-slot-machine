import { WinNotificationProps } from "../Types"

export const WinNotification = ({ hasWon }: WinNotificationProps) => {
  return (
    <div className='w-full'>{hasWon && <p className='winNotification'>
      You Win, fool!</p>}</div>
  )
}
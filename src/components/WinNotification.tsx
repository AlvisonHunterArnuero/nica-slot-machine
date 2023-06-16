import { WinNotificationProps } from '../Types';

export const WinNotification = ({ hasWon }: WinNotificationProps) => {
  return <div className="w-full">{hasWon && <p className="custom-win-notification">You Won, bud!</p>}</div>;
};

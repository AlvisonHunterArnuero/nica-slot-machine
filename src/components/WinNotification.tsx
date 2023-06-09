import React from 'react'

type WinNotificationProps ={
  hasWon: boolean;
}
export const WinNotification = ({hasWon}:WinNotificationProps) => {
  return (
    <div className='w-full'>{hasWon && <p className='uppercase font-extrabold text-6xl text-red-600 my-5'>
          You Win, fool!</p>}</div>
  )
}

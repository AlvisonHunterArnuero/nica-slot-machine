import { useState } from 'react';
import './App.css'
import { WinNotification } from './components/WinNotification';
import { SlotMachine } from './components/SlotMachine';
import { MainTitle } from './components/MainTitle';
import { Expressions } from './components/Expressions';

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [elements, setElements] = useState<number[]>([1, 1, 1]);
  const [currentEmotionalExpression, setCurrentEmotionalExpression] = useState<string>("doubt");


  const getRandomArrElement = (): Record<string, number> => {
    const arrPrizes: number[] = [1, 2, 3];
    const firstRndItem: number = arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
    const secondRndItem: number = arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
    const thirdRndItem: number = arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
    isClicked && setIsClicked(false);
    return { "firstRndItem": firstRndItem, "secondRndItem": secondRndItem, "thirdRndItem": thirdRndItem };
  };

  const handleClick = (): void => {
    if (hasWon) {
      setHasWon(false);
    }
    const { firstRndItem, secondRndItem, thirdRndItem } = getRandomArrElement();
    setElements([firstRndItem, secondRndItem, thirdRndItem]);
    if (firstRndItem === secondRndItem) {
      setCurrentEmotionalExpression("what");
    } else if (firstRndItem === thirdRndItem) {
      setCurrentEmotionalExpression("uff");
    } else {
      setCurrentEmotionalExpression("mad");
    }
    const winner =
      (firstRndItem === secondRndItem) === true &&
        (secondRndItem === thirdRndItem) === true
        ? true
        : false;
    if (winner === true) {
      setHasWon(true);
      setCurrentEmotionalExpression("happy");
    }
    setIsClicked(true);
  };

  return (
    <>
      <div className='h-fit w-full my-4 flex flex-col justify-center items-center'>
        <MainTitle title="Nica Slot Machine" />
        <Expressions currentEmotionalExpression={currentEmotionalExpression} />
        <WinNotification hasWon={hasWon} />
        <SlotMachine elements={elements} />
        <button onClick={handleClick} className='my-8 transition ease-in-out duration-150 border-2 p-6 uppercase font-medium
       w-1/2 bg-indigo-500 text-5xl rounded-md shadow-xs cursor-pointer hover:bg-indigo-900 hover:text-gray-100'>
          {hasWon ? "Restart Game" : "Spin It!"}
        </button>
      </div>
    </>
  )
}

export default App

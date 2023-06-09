import { useState } from 'react';
import './App.css'

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
        <h1 className="text-purple-500 text-center text-8xl mx-auto">
          Nica Slot Machine
        </h1>
        <div className='flex flex-row items-center justify-center my-4 min-w-full'>
          <div className="basis-full">
            <img className='p-1 w-24 transition ease-in-out duration-300 mx-auto' src={`../src/assets/imgs/${currentEmotionalExpression}.png`} />
          </div>
        </div>
        <div className='w-full'>{hasWon && <p className='uppercase font-extrabold text-6xl text-red-600 my-5'>
          You Win, fool!</p>}</div>
        <div className='flex flex-col md:flex-row gap-20 p-14 shadow-xs rounded-lg bg-sky-500 items-center justify-center'>
          <div className='basis-1/3'>
            <img className='w-48 h-48 bg-slate-600 rounded-full p-2 border-2 border-gray-700' src={`../src/assets/imgs/0${elements[0]}.png`} />
          </div>
          <div className='basis-1/3'>
            <img className='w-48 h-48 bg-slate-600 rounded-full p-2 border-2 border-gray-700' src={`../src/assets/imgs/0${elements[1]}.png`} />
          </div>
          <div className='basis-1/3'>
            <img className='w-48 h-48 bg-slate-600 rounded-full p-2 border-2 border-gray-700' src={`../src/assets/imgs/0${elements[2]}.png`} />
          </div>
        </div>

      </div>
      <button onClick={handleClick} className='my-4 transition ease-in-out duration-150 border-2 p-6 uppercase font-medium
       w-1/2 bg-indigo-500 text-5xl rounded-md shadow-xs cursor-pointer hover:bg-indigo-900 hover:text-gray-100'>
        {hasWon ? "Restart Game" : "SPIN IT!"}
      </button>
    </>
  )
}

export default App

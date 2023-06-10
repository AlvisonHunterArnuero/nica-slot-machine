import { useState } from 'react';
import './App.css';
import { WinNotification } from './components/WinNotification';
import { SlotMachine } from './components/SlotMachine';
import { MainTitle } from './components/MainTitle';
import { Expressions } from './components/Expressions';
import { SpinButton } from './components/SpinButton';
import { getRandomArrElement } from './Helpers/customFn';

function App() {
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [elements, setElements] = useState<number[]>([1, 1, 1]);
  const [currentEmotionalExpression, setCurrentEmotionalExpression] =
    useState<string>('doubt');
  const winSound = new Audio('/audios/win.wav');
  const spinSound = new Audio('/audios/spin.wav');

  const handleClick = (): void => {
    spinSound.play();
    if (hasWon) {
      setHasWon(false);
    }
    const { firstRndItem, secondRndItem, thirdRndItem } = getRandomArrElement();
    setElements([firstRndItem, secondRndItem, thirdRndItem]);
    if (firstRndItem === secondRndItem) {
      setCurrentEmotionalExpression('what');
    } else if (firstRndItem === thirdRndItem) {
      setCurrentEmotionalExpression('uff');
    } else {
      setCurrentEmotionalExpression('mad');
    }
    const winner =
      (firstRndItem === secondRndItem) === true &&
      (secondRndItem === thirdRndItem) === true
        ? true
        : false;
    if (winner === true) {
      winSound.play();
      setHasWon(true);
      setCurrentEmotionalExpression('happy');
    }
  };

  return (
    <div className="mainWrapper">
      <MainTitle title="Nica Slot Machine" />
      <Expressions currentEmotionalExpression={currentEmotionalExpression} />
      <WinNotification hasWon={hasWon} />
      <SlotMachine elements={elements} />
      <SpinButton handleClick={handleClick} hasWon={hasWon} />
    </div>
  );
}

export default App;

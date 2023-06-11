import { useState } from 'react';
import './App.css';
import { WinNotification } from './components/WinNotification';
import { SlotMachine } from './components/SlotMachine';
import { MainTitle } from './components/MainTitle';
import { Expressions } from './components/Expressions';
import { SpinButton } from './components/SpinButton';
import { getRandomArrElement, playSound } from './Helpers/customFn';
import { EmotionalExpression } from './Types';

// Audios for the spin and win sounds
const winSound = new Audio('/audios/win.wav');
const spinSound = new Audio('/audios/spin.wav');

function App() {
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [elements, setElements] = useState<number[]>([8, 8, 8]);
  const [currentEmotionalExpression, setCurrentEmotionalExpression] = useState<EmotionalExpression>('doubt');

  const spinBtnClickHandler = (): void => {
    hasWon && setHasWon(false);
    playSound(spinSound);
    const { firstRndItem, secondRndItem, thirdRndItem } = getRandomArrElement();
    setElements([firstRndItem, secondRndItem, thirdRndItem]);
    if (firstRndItem === secondRndItem) {
      setCurrentEmotionalExpression('what');
    } else if (firstRndItem === thirdRndItem) {
      setCurrentEmotionalExpression('uff');
    } else if (secondRndItem === thirdRndItem) {
      setCurrentEmotionalExpression('doubt');
    } else {
      setCurrentEmotionalExpression('mad');
    }
    const winner =
      (firstRndItem === secondRndItem) === true && (secondRndItem === thirdRndItem) === true ? true : false;
    if (winner === true) {
      setHasWon(true);
      setCurrentEmotionalExpression('happy');
      playSound(winSound);
    }
  };

  return (
    <div className="mainWrapper">
      <MainTitle title="Nica Slot Machine" />
      <Expressions currentEmotionalExpression={currentEmotionalExpression} />
      <WinNotification hasWon={hasWon} />
      <SlotMachine elements={elements} />
      <SpinButton spinBtnClickHandler={spinBtnClickHandler} hasWon={hasWon} />
    </div>
  );
}

export default App;

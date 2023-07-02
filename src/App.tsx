import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { WinNotification } from './components/WinNotification';
import { SlotMachine } from './components/SlotMachine';
import { MainTitle } from './components/MainTitle';
import { Expressions } from './components/Expressions';
import { SpinButton } from './components/SpinButton';
import { getEmotionalExpression, getRandomArrElement, playSound } from './Helpers/customFn';
import { EmotionalExpression } from './Types';

// Audios for the spin and win sounds
const winSound = new Audio('/audios/win.wav');
const spinSound = new Audio('/audios/spin.wav');

type TErrorObjTypeProperties = {
  message: string;
};

type TfbRenderProps = {
  error: TErrorObjTypeProperties;
};
const fallbackRender = ({ error }: TfbRenderProps): JSX.Element => {
  const { message } = error;
  const stl = {
    color: 'red',
  };
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={stl}>{message}</pre>
    </div>
  );
};

function App() {
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [elements, setElements] = useState<number[]>([8, 8, 8]);
  const [currentEmotionalExpression, setCurrentEmotionalExpression] = useState<EmotionalExpression>('doubt');

  const spinBtnClickHandler = (): void => {
    hasWon && setHasWon(false);
    playSound(spinSound, false, 1.0);
    const { firstRndItem, secondRndItem, thirdRndItem } = getRandomArrElement();
    setElements([firstRndItem, secondRndItem, thirdRndItem]);

    const currEmotion: EmotionalExpression = getEmotionalExpression({ firstRndItem, secondRndItem, thirdRndItem });
    setCurrentEmotionalExpression(currEmotion);

    const winner = firstRndItem === secondRndItem && secondRndItem === thirdRndItem;
    if (winner) {
      setHasWon(true);
      setCurrentEmotionalExpression('happy');
      playSound(winSound, false, 1.0);
    }
  };
  return (
    <ErrorBoundary fallback={fallbackRender as unknown as JSX.Element}>
      <>
        <div className="custom-main-title-styles">
          <MainTitle title="Nica Slot Machine" />
          <Expressions currentEmotionalExpression={currentEmotionalExpression} />
          <WinNotification hasWon={hasWon} />
          <SlotMachine elements={elements} />
          <SpinButton spinBtnClickHandler={spinBtnClickHandler} hasWon={hasWon} />
        </div>
      </>
    </ErrorBoundary>
  );
}

export default App;

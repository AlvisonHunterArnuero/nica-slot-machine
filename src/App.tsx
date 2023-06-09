import { useState } from "react";
import "./App.css";
import { WinNotification } from "./components/WinNotification";
import { SlotMachine } from "./components/SlotMachine";
import { MainTitle } from "./components/MainTitle";
import { Expressions } from "./components/Expressions";
import { SpinButton } from "./components/SpinButton";

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [elements, setElements] = useState<number[]>([1, 1, 1]);
  const [currentEmotionalExpression, setCurrentEmotionalExpression] =
    useState<string>("doubt");

  const getRandomArrElement = (): Record<string, number> => {
    const arrPrizes: number[] = [1, 2, 3];
    const firstRndItem: number =
      arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
    const secondRndItem: number =
      arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
    const thirdRndItem: number =
      arrPrizes[Math.floor(Math.random() * arrPrizes.length)];
    isClicked && setIsClicked(false);
    return {
      firstRndItem: firstRndItem,
      secondRndItem: secondRndItem,
      thirdRndItem: thirdRndItem,
    };
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

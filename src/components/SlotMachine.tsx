import { SlotMachineProps } from '../Types';

export const SlotMachine = ({ elements }: SlotMachineProps) => {
  return (
    <div className="spinnerContainer">
      {elements.map((item, index) => (
        <div key={index} className="md:basis-1/3 basis-full">
          <img className="spinners" src={`../src/assets/imgs/0${item}.png`} />
        </div>
      ))}
    </div>
  );
};

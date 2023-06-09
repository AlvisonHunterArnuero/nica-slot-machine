import { SlotMachineProps } from "../Types"

export const SlotMachine = ({ elements }: SlotMachineProps) => {
  return (
    <div className='spinnerContainer'>
      {elements.map((item, index) => (
        <div key={index} className='basis-1/3'>
          <img className='spinners' src={`../src/assets/imgs/0${item}.png`} />
        </div>))}
    </div>
  )
}

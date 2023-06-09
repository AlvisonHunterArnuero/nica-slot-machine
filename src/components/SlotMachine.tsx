type SlotMachineProps ={
  elements: number[]
}
export const SlotMachine = ({elements}: SlotMachineProps) => {
  return (
      <div className='flex flex-col md:flex-row gap-20 p-14 shadow-xs rounded-lg bg-sky-500 items-center justify-center'>
          <div className='basis-1/3'>
            <img className='w-48 h-48 bg-slate-600 rounded-full p-1 border-gray-700' src={`../src/assets/imgs/0${elements[0]}.png`} />
          </div>
          <div className='basis-1/3'>
            <img className='w-48 h-48 bg-slate-600 rounded-full p-1 border-gray-700' src={`../src/assets/imgs/0${elements[1]}.png`} />
          </div>
          <div className='basis-1/3'>
            <img className='w-48 h-48 bg-slate-600 rounded-full p-1 border-gray-700' src={`../src/assets/imgs/0${elements[2]}.png`} />
          </div>
        </div>
  )
}

import { MainTitleProps } from "../Types"

export const MainTitle = ({title}: MainTitleProps) => {
  return (
    <h1 className="mainTitle">
      {title}
    </h1>
  )
}

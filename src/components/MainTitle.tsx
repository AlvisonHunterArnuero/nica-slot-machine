type MainTitleProps = {
  title: string;
}
export const MainTitle = ({title}: MainTitleProps) => {
  return (
    <h1 className="text-purple-500 text-center text-8xl mx-auto">
      {title}
    </h1>
  )
}

import { ExpressionsProps } from "../Types";

export const Expressions = ({
  currentEmotionalExpression,
}: ExpressionsProps) => {
  return (
    <div className="flex flex-row my-4">
      <div className="basis-full">
        <img
          className="p-1 w-24 transition ease-in-out duration-300 mx-auto"
          src={`../src/assets/imgs/${currentEmotionalExpression}.png`}
        />
      </div>
    </div>
  );
};

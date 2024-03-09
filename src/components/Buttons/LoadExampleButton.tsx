import { ButtonStyled } from "./ButtonStyled";

type LoadExampleButtonProps = {
  onClick: () => void;
};

export const LoadExampleButton = ({ onClick }: LoadExampleButtonProps) => {
  return (
    <div>
      <ButtonStyled 
      flex="flex"
      content="Load Example"
      onClick={onClick}
      />
    </div>
  );
};

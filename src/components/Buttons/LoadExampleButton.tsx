import { ButtonStyled } from "./ButtonStyled";

type LoadExampleButtonProps = {
  onClick: () => void;
};

export const LoadExampleButton = ({ onClick }: LoadExampleButtonProps) => {
  return (
    <div>
      <ButtonStyled 
      content="Load Example"
      onClick={onClick}
      />
    </div>
  );
};

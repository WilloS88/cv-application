import { ButtonStyled } from "./ButtonStyled";
import type { LoadExampleButtonProps } from "../../../types/styled/LoadExampleButton";

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

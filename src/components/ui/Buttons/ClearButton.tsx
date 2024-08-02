import { ButtonStyled } from "./ButtonStyled";
import deleteIcon from "../../../assets/icons/input/deleteIcon.svg";
import type { ClearButtonProps } from "../../../types/styled/ClearButtonProps";

export const ClearButton = ({ clearData }: ClearButtonProps) => {
  return (
    <div className="my-2">
      <ButtonStyled
        icon={deleteIcon}
        content="Clear Resume"
        textColor="text-red-500"
        onClick={clearData}
      />
    </div>
  );
};

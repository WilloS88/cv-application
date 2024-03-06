import { ButtonStyled } from "./ButtonStyled";
import deleteIcon from "../../assets/icons/input/deleteIcon.svg";

type ClearButtonProps = {
  clearData: () => void;
};

export const ClearButton = ({ clearData }: ClearButtonProps) => {
  return (
    <div>
      <ButtonStyled
        icon={deleteIcon}
        content="Clear Resume"
        textColor="text-red-500"
        onClick={clearData}
      />
    </div>
  );
};

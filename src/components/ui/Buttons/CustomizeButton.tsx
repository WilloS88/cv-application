import { ButtonStyled } from "./ButtonStyled";
import editIcon from "../../../assets/icons/editIcon.svg";
import type { CustomizeButtonProps } from "../../../types/styled/CustomizeButton";

export const CustomizeButton = ({ onClick }: CustomizeButtonProps) => {
  return (
    <div className="my-2">
      <ButtonStyled
        icon={editIcon}
        content="Customize"
        onClick={() => onClick(2)}
      />
    </div>
  );
};

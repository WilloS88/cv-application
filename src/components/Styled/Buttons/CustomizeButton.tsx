import { ButtonStyled } from "./ButtonStyled";
import editIcon from "../../../assets/icons/editIcon.svg";

export const CustomizeButton = () => {
  return (
    <div className="my-2">
      <ButtonStyled
        icon={editIcon}
        content="Customize"
        onClick={() => {}}
      />
    </div>
  );
};

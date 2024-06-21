import { ButtonStyled } from "./ButtonStyled";
import contentIcon from "../../../assets/icons/contentIcon.svg";

export const ContentButton = () => {
  return (
    <div className="my-2">
      <ButtonStyled
        icon={contentIcon}
        content="Content"
        onClick={() => {}}
      />
    </div>
  );
};

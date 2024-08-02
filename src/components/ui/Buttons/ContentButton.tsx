import { ButtonStyled } from "./ButtonStyled";
import contentIcon from "../../../assets/icons/contentIcon.svg";
import type { ContentButtonProps } from "../../../types/styled/ContentButton";

export const ContentButton = ({ onClick }: ContentButtonProps) => {
  return (
    <div className="my-2">
      <ButtonStyled
        icon={contentIcon}
        content="Content"
        onClick={() => onClick(1)}
      />
    </div>
  );
};

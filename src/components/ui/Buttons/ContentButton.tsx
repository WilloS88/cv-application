import { Button } from "./Button";
import contentIcon from "../../../assets/icons/contentIcon.svg";
import type { ContentButtonProps } from "../../../types/ContentButton";

export const ContentButton = ({ onClick }: ContentButtonProps) => {
  return (
    <div className="my-2">
      <Button icon={contentIcon} content="Content" onClick={() => onClick(1)} />
    </div>
  );
};

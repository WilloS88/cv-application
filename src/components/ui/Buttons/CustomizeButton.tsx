import { Button } from "./Button";
import editIcon from "../../../assets/icons/editIcon.svg";
import type { CustomizeButtonProps } from "../../../types/CustomizeButton";

export const CustomizeButton = ({ onClick }: CustomizeButtonProps) => {
  return (
    <div className="my-2">
      <Button icon={editIcon} content="Customize" onClick={() => onClick(2)} />
    </div>
  );
};

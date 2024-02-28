import deleteIcon from "../assets/icons/input/deleteIcon.svg";

type ClearButtonProps = {
  clearData: () => void;
};

export const ClearButton = ({ clearData }: ClearButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <img src={deleteIcon} alt="" className="w-4 h-4" />
      <button className="text-red-600" onClick={clearData}>
        Clear Resume
      </button>
    </div>
  );
};

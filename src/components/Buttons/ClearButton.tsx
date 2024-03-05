import deleteIcon from "../../assets/icons/input/deleteIcon.svg";

type ClearButtonProps = {
  clearData: () => void;
};

export const ClearButton = ({ clearData }: ClearButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 font-bold py-2 px-4 rounded text-red-600"
        onClick={clearData}
      >
        <img src={deleteIcon} alt="" className="w-4 h-4" />
        Clear Resume
      </button>
    </div>
  );
};

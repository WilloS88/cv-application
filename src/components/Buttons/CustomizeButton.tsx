import editIcon from "../../assets/icons/editIcon.svg";

export const CustomizeButton = () => {
  return (
    <div className="my-2">
      <button className="flex justify-center items-center gap-2 bg-white hover:bg-slate-200 font-bold py-2 px-4 rounded text-black">
        <img src={editIcon} alt="" className="w-4 h-4" />
        Customize
      </button>
    </div>
  );
};

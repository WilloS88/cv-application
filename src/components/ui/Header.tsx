import HeaderIcon from "../../assets/icons/headerIcon.svg";

export const Header = () => {
  return (
    <div className="flex text-center justify-center items-center gap-5 py-3 text-4xl bg-slate-300">
      <h1>CV Generator</h1>
      <img src={HeaderIcon} alt="" className="w-12 h-12" />
    </div>
  );
};

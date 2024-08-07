import type { ButtonProps } from "../../../types/styled/Button";

export const Button = ({
  icon,
  content,
  onClick,
  textColor = "text-black",
}: ButtonProps) => {
  return (
    <button
      className={`flex font-bold ${textColor} rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm bg-blue-600 hover:bg-blue-700 w-full`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className="w-5 h-5 mx-1" />}
      {content}
    </button>
  );
};

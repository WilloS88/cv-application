import type { ButtonStyledProps } from "../../../types/styled/ButtonStyled";

export const ButtonStyled = ({
  icon,
  content,
  onClick,
  textColor = "text-black",
}: ButtonStyledProps) => {
  return (
    <button
      className={` flex font-bold ${textColor} rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" className=" w-5 h-5" />}
      {content}
    </button>
  );
};

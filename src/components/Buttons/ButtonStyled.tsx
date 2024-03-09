type ButtonStyledProps = {
  flex: string;
  icon?: string;
  content: string;
  textColor?: string;
  onClick: () => void;
};

export const ButtonStyled = ({
  icon,
  flex,
  content,
  onClick,
  textColor = "text-black",
}: ButtonStyledProps) => {
  return (
    <div className={`${flex} items-center bg-white hover:bg-slate-200 transition duration-200 ease-in-out py-2 px-4 rounded gap-2 `}>
      {icon && <img src={icon} alt="icon" className=" w-5 h-5" />}
      <button
        className={`font-bold ${textColor}`}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
};

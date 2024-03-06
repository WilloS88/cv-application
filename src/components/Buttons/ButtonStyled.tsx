type ButtonStyledProps = {
  icon?: string;
  content: string;
  textColor?: string; 
  onClick: () => void;
};

export const ButtonStyled = ({ icon, content, onClick, textColor = "text-black" }: ButtonStyledProps) => {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-2 bg-white hover:bg-slate-200 transition duration-200 ease-in-out 
                    font-bold py-2 px-4 rounded ${textColor}`}
        onClick={onClick}
      >
        {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
        {content}
      </button>
    </div>
  );
};

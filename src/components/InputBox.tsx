type InputBoxProps = {
  heading: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText: string;
};

export const InputBox = ({
  heading,
  value,
  onChange,
  placeholderText,
}: InputBoxProps) => {
  return (
    <div className="flex-col ">
      <h2>{heading}</h2>
      <input
        className="min-w-0 flex-auto border-black rounded-md border-2 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};

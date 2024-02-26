type InputBoxProps = {
  heading: string;
  value: string;
  state: string;
  placeholderText: string;
};

export const InputBox = ({ heading, value, state, placeholderText }: InputBoxProps) => {
  return (
    <div className="flex-col">
          <h2>{heading}</h2>
          <input type="text" value={value} onChange={state} placeholder={placeholderText}/>
        </div>
  );
};

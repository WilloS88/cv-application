type LoadExampleButtonProps = {
  onClick: () => void;
};

export const LoadExampleButton = ({ onClick }: LoadExampleButtonProps) => {
  return (
    <div className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-2 px-4 rounded">
      <button onClick={onClick}>Load Example</button>
    </div>
  );
};

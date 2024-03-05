type LoadExampleButtonProps = {
  onClick: () => void;
};

export const LoadExampleButton = ({ onClick }: LoadExampleButtonProps) => {
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <button onClick={onClick}>Load Example</button>
    </div>
  );
};

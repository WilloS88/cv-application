type CustomizeColorProps = {
  onColorChange: (color: string) => void;
}

export const CustomizeColor = ({ onColorChange }: CustomizeColorProps) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(e.target.value);
  };

  return (
    <div className="bg-white p-4 my-2 rounded-lg">
      <h1 className="text-xl font-bold mb-2">Color</h1>
      <div className="flex items-center gap-2">
        <span>Accent Color </span>
        <input
          type="color"
          
          className="appearance-none border-0 rounded-full shadow-custom cursor-pointer h-8 p-0 w-8"
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

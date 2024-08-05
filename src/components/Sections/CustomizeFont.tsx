import { useState } from 'react';

type CustomizeFontProps = {
  onFontClick: (font: string) => void;
};

export const CustomizeFont = ({ onFontClick }: CustomizeFontProps) => {
  const [selectedFont, setSelectedFont] = useState<string>("");

  const handleFontClick = (font: string) => {
    setSelectedFont(font);
    onFontClick(font);
  };

  return (
    <div className="bg-white p-5 my-2 rounded-lg">
      <h1 className="text-xl font-bold mb-2">Fonts</h1>
      <div className="flex flex-wrap gap-5">
        <button
          className={`border-2 p-2 font-serif rounded-lg ${selectedFont === 'font-serif' ? 'bg-blue-600 text-white' : 'border-blue-500'}`}
          onClick={() => handleFontClick('font-serif')}
        >
          <div className="flex-col">
            <div className={`${selectedFont === 'font-serif' ? 'font-bold' : ''}`}>Aa</div>
            <div>Serif</div>
          </div>
        </button>
        <button
          className={`border-2 p-2 font-sans rounded-lg ${selectedFont === 'font-sans' ? 'bg-blue-600 text-white' : 'border-blue-500'}`}
          onClick={() => handleFontClick('font-sans')}
        >
          <div className="flex-col">
            <div className={`${selectedFont === 'font-sans' ? 'font-bold' : ''}`}>Aa</div>
            <div>Sans</div>
          </div>
        </button>
        <button
          className={`border-2 p-2 font-mono rounded-lg ${selectedFont === 'font-mono' ? 'bg-blue-600 text-white' : 'border-blue-500'}`}
          onClick={() => handleFontClick('font-mono')}
        >
          <div className="flex-col">
            <div className={`${selectedFont === 'font-mono' ? 'font-bold' : ''}`}>Aa</div>
            <div>Mono</div>
          </div>
        </button>
      </div>
    </div>
  );
};

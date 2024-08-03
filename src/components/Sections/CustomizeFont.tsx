
export const CustomizeFont = () => {
  return (
    <div className="bg-white p-5 my-2 rounded-lg">
      <h1 className="text-xl font-bold mb-2">Fonts</h1>
      <div className="flex flex-wrap gap-5">
        <button className="border-2 border-blue-500 p-2 font-serif rounded-lg hover:bg-blue-500">
          <div className="flex-col">
            <div className="font-bold">Aa</div>
            <div>Serif</div>
          </div>
        </button>
        <button className="border-2 border-blue-500 p-2 font-sans rounded-lg hover:bg-blue-500">
          <div className="flex-col">
            <div>Aa</div>
            <div>Sans</div>
          </div>
        </button>
        <button className="border-2 border-blue-500 p-2 font-mono rounded-lg hover:bg-blue-500">
          <div className="flex-col">
            <div>Aa</div>
            <div>Mono</div>
          </div>
        </button>
      </div>
    </div>
  );
};

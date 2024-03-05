type ContainerProps = {
  children?: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex-col bg-slate-300 p-4 rounded-sm w-96 h-112">
      {children}
    </div>
  );
};

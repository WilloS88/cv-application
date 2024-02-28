type ContainerProps = {
  children?: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex-col bg-slate-300 px-12 py-12 rounded-sm w-96 h-96">
      {children}
    </div>
  );
};

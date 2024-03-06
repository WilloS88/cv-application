type ContainerProps = {
  children?: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex-col bg-white p-4 rounded-lg w-96 h-112">
      {children}
    </div>
  );
};

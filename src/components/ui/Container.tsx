import type { ContainerProps } from "../../types/Container";

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex-col bg-white p-4 rounded-lg">
      {children}
    </div>
  );
};

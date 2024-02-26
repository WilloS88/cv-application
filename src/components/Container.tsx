
type ContainerProps = {
  children?: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-slate-300 px-32 py-40 rounded-sm">
      {children}
    </div>
  )
}

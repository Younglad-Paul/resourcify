type ContainerProps = {
  children: React.ReactNode;
};

const ContainerDashboard = ({ children }: ContainerProps) => {
  return <div className="max-w-[95rem]  mx-auto w-full ">{children}</div>;
};
export default ContainerDashboard;

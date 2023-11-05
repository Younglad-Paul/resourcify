type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[100rem]  w-full bg-[#f5f5f5] overflow-hidden">{children}</div>;
};
export default Container;

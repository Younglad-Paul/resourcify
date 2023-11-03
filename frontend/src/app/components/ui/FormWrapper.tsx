type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[85rem]  mx-auto w-full ">{children}</div>;
};
export default Container;

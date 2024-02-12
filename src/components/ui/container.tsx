type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <div className="container px-8 m-auto">{children}</div>;
};

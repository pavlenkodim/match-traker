import cn from "../../utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("max-w-full mx-auto px-[42px]", className || "")}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

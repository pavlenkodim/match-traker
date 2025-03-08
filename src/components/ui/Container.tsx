import cn from "../../utils/cn";

const Container = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
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

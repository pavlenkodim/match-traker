import cn from "../../utils/cn";

interface LabelProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "danger" | "success" | "warning";
  size?: "sm" | "md" | "lg";
}

const Label = ({
  children,
  className,
  variant = "danger",
  size = "sm",
  ...props
}: LabelProps) => {
  const variantClasses = {
    danger: "bg-primary text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
  };

  const sizeClasses = {
    sm: "px-[8px] py-[6px] min-w-[92px] text-sm font-semibold",
    md: "px-[40px] py-[14px] min-w-[204px] text-lg font-semibold",
    lg: "px-[80px] py-[34px] min-w-[328px] text-2xl font-semibold",
  };

  return (
    <button
      className={cn(
        "btn",
        className || "",
        variantClasses[variant],
        sizeClasses[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Label;

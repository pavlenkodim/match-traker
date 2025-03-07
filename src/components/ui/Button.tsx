import cn from "../../utils/cn";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "success" | "warning" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-hover disabled:bg-primary-disabled focus:outline-primary",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    secondary: "bg-secondary text-white",
  };

  const sizeClasses = {
    sm: "px-[8px] py-[6px] min-w-[92px] text-sm font-semibold",
    md: "px-[40px] py-[17px] min-w-[204px] text-lg font-semibold",
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

export default Button;

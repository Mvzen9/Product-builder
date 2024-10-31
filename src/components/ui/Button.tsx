import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button: FC<Iprops> = ({
  children,
  className,
  width = "w-full",
  ...rest
}) => {
  return (
    <button className={`${className} ${width} rounded-md p-1.5 `} {...rest}>
      {children}
    </button>
  );
};

export default Button;

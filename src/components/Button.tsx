import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 cursor-pointer border-1 border-white w-fit flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

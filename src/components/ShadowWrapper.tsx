import { ReactNode } from "react";

type ShadowWrapperProps = {
  children?: ReactNode;
};

function ShadowWrapper({ children }: ShadowWrapperProps) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute h-full w-full z-40">{children}</div>
      <div className="absolute h-[100px] w-full bg-linear-to-b from-black/80 to-black/0 top-0 left-0 select-none"></div>
      <div className="absolute h-[100px] w-full bg-linear-to-t from-black/80 to-black/0 bottom-0 left-0 select-none"></div>
    </div>
  );
}

export default ShadowWrapper;

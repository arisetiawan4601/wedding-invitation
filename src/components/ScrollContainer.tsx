import { ReactNode } from "react";

type ScrollContainerProps = {
  children?: ReactNode;
};

function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <div className="flex flex-col snap-y snap-mandatory h-screen overflow-scroll">
      {children}
    </div>
  );
}

export default ScrollContainer;

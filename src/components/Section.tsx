import clsx from "clsx";
import { ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  className?: string;
};

function Section({ children, className }: SectionProps) {
  return (
    <div className={clsx(["h-screen w-full snap-center shrink-0", className])}>
      {children}
    </div>
  );
}

export default Section;

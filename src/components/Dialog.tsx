import { Dispatch, ReactNode, SetStateAction } from "react";
import { X } from "lucide-react";

type DialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
};

function Dialog({ open, setOpen, children }: DialogProps) {
  function handleClickOutside() {
    setOpen(false);
  }

  function handleClickInside(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    open && (
      <div
        onClick={handleClickOutside}
        className="p-4 fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center bg-black/40  backdrop-blur-md"
      >
        <div
          onClick={handleClickInside}
          className="bg-black/40 rounded-xl p-8 relative "
        >
          <button onClick={handleClose} className="absolute top-4 right-4">
            <X className="" size={32} />
          </button>
          {children}
        </div>
      </div>
    )
  );
}

export default Dialog;

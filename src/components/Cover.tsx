import clsx from "clsx";
import Button from "./Button";
import { useEffect, useState } from "react";

type CoverProps = {
  open: boolean;
  onOpen: () => void;
};

function Cover({ open, onOpen }: CoverProps) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const name = params.get("guest");
    if (name) {
      setGuestName(decodeURIComponent(name));
    }
  }, []);

  return (
    <div
      className={clsx([
        "h-screen w-screen z-50 bg-black/20 backdrop-blur-3xl absolute top-0 right-0 flex justify-center items-center transition duration-1000 ease-in-out",
        {
          "translate-y-[-100vh]": open,
        },
      ])}
    >
      <div className="w-screen md:w-[24rem] bg-[url('assets/xxx.png')] bg-cover bg-center flex flex-col justify-center items-center p-12">
        <div className="flex flex-col items-center flex-1 justify-center">
          <h1
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="font-light"
          >
            Wedding Invitation
          </h1>
          <p
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="text-5xl mt-4"
          >
            ARI & ULFIA
          </p>
          {guestName && (
            <div>
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="font-light text-center text-sm"
              >
                Warmly invite:
              </p>
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="text-center font-medium text-2xl mt-2"
              >
                {guestName}
              </p>
            </div>
          )}
        </div>
        <Button onClick={() => onOpen()} className="mt-4 px-10 text-sm">
          OPEN
        </Button>
      </div>
    </div>
  );
}

export default Cover;

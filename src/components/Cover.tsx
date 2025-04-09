import clsx from "clsx";
import Button from "./Button";

type CoverProps = {
  open: boolean;
  onOpen: () => void;
};

function Cover({ open, onOpen }: CoverProps) {
  // let guestName = "Galih Sukma Adjie";
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
            Undangan Pernikahan
          </h1>
          <p
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="text-5xl my-2"
          >
            ARI & ULFIA
          </p>
          {/* <p
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="font-light"
          >
            Kepada
          </p>
          <p
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="font-medium text-3xl my-2"
          >
            {guestName}
          </p> */}
          <p
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="font-light"
          >
            Sabtu, 19 April 2025
          </p>
        </div>
        <Button onClick={() => onOpen()} className="mt-8">
          Buka Undangan
        </Button>
      </div>
    </div>
  );
}

export default Cover;

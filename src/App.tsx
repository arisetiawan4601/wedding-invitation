import { useState, useEffect } from "react";
import Cover from "./components/Cover";
import Welcome from "./components/Welcome";
import clsx from "clsx";
import ScrollContainer from "./components/ScrollContainer";
import Bride from "./components/Bride";
import Groom from "./components/Groom";
import CountDown from "./components/CountDown";
import Location from "./components/Location";
import Gift from "./components/Gift";
import Thanks from "./components/Thanks";
import { Volume2 } from "lucide-react";
import { VolumeOff } from "lucide-react";
import BgMusic from "./assets/bg_music.mp3";
import Wishes from "./components/Wishes";
import Quotes from "./components/Quotes";

function useAudio(url: string) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  function toggle() {
    setPlaying(!playing);
  }

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
}

function App() {
  const [playing, toggle] = useAudio(BgMusic) as [boolean, () => void];
  const [open, setOpen] = useState<boolean>(false);

  function handleOpen() {
    setOpen(true);
    toggle();
  }

  return (
    <div
      className={clsx([
        "fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center bg-black scrollbar-thin scrollbar-thumb-gray-500 scrollbar-",
        {
          "h-screen overflow-hidden": !open,
        },
      ])}
    >
      <div className="absolute bottom-4 right-4 z-50 w-[44px]">
        <button
          onClick={() => toggle()}
          className="bg-black rounded-full w-[44px] h-[44px] flex justify-center border-1 border-gray-500 items-center"
        >
          {!playing ? (
            <VolumeOff className="text-white" />
          ) : (
            <Volume2 className="text-white" />
          )}
        </button>
      </div>
      <div className="w-full md:w-[24rem] text-white">
        <Cover open={open} onOpen={handleOpen} />
        <ScrollContainer>
          <Welcome />
          <Bride />
          <Groom />
          <CountDown />
          <Location />
          <Wishes />
          <Gift />
          <Quotes />
          <Thanks />
        </ScrollContainer>
      </div>
    </div>
  );
}

export default App;

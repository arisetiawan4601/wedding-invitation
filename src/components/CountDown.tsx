import { useEffect, useState } from "react";
import ShadowWrapper from "./ShadowWrapper";
import Section from "./Section";
import { motion } from "motion/react";

type CountItemProps = {
  time: number;
  bottom: string;
};

function CountItem({ time, bottom }: CountItemProps) {
  return (
    <div className="p-2 flex flex-col items-center rounded-xl w-full">
      <p style={{ fontFamily: "'Forum', system-ui" }} className="text-5xl">
        {Math.abs(time)}
      </p>
      <p
        style={{ fontFamily: "'Forum', system-ui" }}
        className="font-light text-sm"
      >
        {bottom}
      </p>
    </div>
  );
}

function CountDown() {
  const eventDate = 1745020800;
  const [now, setNow] = useState(Date.now() / 1000);

  useEffect(() => {
    setInterval(() => setNow(Date.now() / 1000), 1000);
  }, []);

  function calculateDays() {
    const days = Math.floor((eventDate - now) / (60 * 60 * 24));
    if (days < 0) {
      return days + 1;
    }
    return days;
  }

  function calculateHours() {
    const hours = Math.floor(((eventDate - now) % (60 * 60 * 24)) / (60 * 60));
    if (hours < 0) {
      return hours + 1;
    }
    return hours;
  }

  function calculateMinutes() {
    const minutes = Math.floor(((eventDate - now) % (60 * 60)) / 60);
    if (minutes < 0) {
      return minutes + 1;
    }
    return minutes;
  }

  function calculateSeconds() {
    const seconds = Math.floor((eventDate - now) % 60);
    if (seconds < 0) {
      return seconds + 1;
    }
    return seconds;
  }

  return (
    <Section className="bg-[url('assets/photo_4.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col justify-center p-12 h-1/2">
          <div className="p-4 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="text-3xl"
              >
                SAVE THE DATE
              </p>
              <p className="font-light text-sm text-center">D-DAY COUNTDOWN</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
            >
              <div className="grid grid-cols-4 gap-2 mt-4">
                <CountItem time={calculateDays()} bottom="Days" />
                <CountItem time={calculateHours()} bottom="Hours" />
                <CountItem time={calculateMinutes()} bottom="Minutes" />
                <CountItem time={calculateSeconds()} bottom="Seconds" />
              </div>
            </motion.div>
          </div>
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default CountDown;

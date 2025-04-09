import { useEffect, useState } from "react";
import ShadowWrapper from "./ShadowWrapper";
import Section from "./Section";
import { motion } from "motion/react";

type CountItemProps = {
  top: string | number;
  bottom: string;
};

function CountItem({ top, bottom }: CountItemProps) {
  return (
    <div className="p-2 flex flex-col items-center rounded-xl w-full">
      <p style={{ fontFamily: "'Forum', system-ui" }} className="text-5xl">
        {top}
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
              <p className="font-light text-sm">D-DAY COUNTDOWN</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
            >
              <div className="grid grid-cols-4 gap-2 mt-4">
                <CountItem
                  top={Math.floor((eventDate - now) / (60 * 60 * 24))}
                  bottom="Days"
                />
                <CountItem
                  top={Math.floor(
                    ((eventDate - now) % (60 * 60 * 24)) / (60 * 60)
                  )}
                  bottom="Hours"
                />
                <CountItem
                  top={Math.floor(((eventDate - now) % (60 * 60)) / 60)}
                  bottom="Minutes"
                />
                <CountItem
                  top={Math.floor((eventDate - now) % 60)}
                  bottom="Seconds"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default CountDown;

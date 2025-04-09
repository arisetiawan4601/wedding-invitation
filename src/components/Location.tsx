import ShadowWrapper from "./ShadowWrapper";
import Section from "./Section";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function Location() {
  return (
    <Section className="bg-[url('assets/photo_5.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col justify-center p-8 h-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            className="p-8 flex flex-col  bg-black/50"
          >
            <p
              style={{
                fontFamily: "'Forum', system-ui",
              }}
              className="text-3xl"
            >
              AKAD
            </p>
            <div className="flex">
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="mr-2"
              >
                SATURDAY,
              </p>
              <p className="font-light">07:00</p>
            </div>
            <p
              style={{
                fontFamily: "'Forum', system-ui",
              }}
              className="text-3xl mt-2"
            >
              RECEPTION
            </p>
            <div className="flex">
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="mr-2"
              >
                SATURDAY,
              </p>
              <p className="font-light">15:00 - 22:00</p>
            </div>
            <p
              style={{
                fontFamily: "'Forum', system-ui",
              }}
              className="text-sm mt-2"
            >
              Dusun Badong, Desa Mojoparon, Kecamatan Rembang, Kabupaten
              Pasuruan
            </p>
            <a href="https://maps.app.goo.gl/cQd42EeF2ni7xRUw8" target="_blank">
              <Button className="mt-4">
                <p className="mr-2 text-sm">View Location</p>
                <ArrowRight size={16} />
              </Button>
            </a>
          </motion.div>
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default Location;

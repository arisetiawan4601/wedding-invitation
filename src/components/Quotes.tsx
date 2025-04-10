import Section from "./Section";
import ShadowWrapper from "./ShadowWrapper";
import { motion } from "motion/react";

function Quotes() {
  return (
    <Section className="bg-[url('assets/photo_8.jpg')] bg-cover bg-center text-white">
      <div className="bg-black/80 w-full h-full">
        <ShadowWrapper>
          <div className="flex flex-col justify-center p-12 h-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
              className="mb-4"
            >
              <div className="flex justify-between">
                <div className="w-[10rem] h-[12rem] bg-[url('assets/photo_10.jpg')] bg-cover bg-center border-1 border-white/20"></div>
                <div className="w-[10rem] h-[12rem] bg-[url('assets/photo_11.jpg')] bg-cover bg-center border-1 border-white/20"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
            >
              <p className="text-sm font-light text-white/90 italic">
                “I ask Allah to make me better for you, and you better for me,
                and us better together for Him.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="text-end text-sm mt-4"
              >
                - ARI & ULFIA -
              </p>
            </motion.div>
          </div>
        </ShadowWrapper>
      </div>
    </Section>
  );
}

export default Quotes;

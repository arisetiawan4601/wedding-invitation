import { motion } from "motion/react";
import Section from "./Section";
import ShadowWrapper from "./ShadowWrapper";

function Welcome() {
  return (
    <Section className="bg-[url('assets/photo_1.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col justify-between items-center p-12 h-full">
          <motion.div
            className="flex justify-between w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <div className="flex flex-col items-center font-semibold text-sm">
              <p>DAY</p>
              <p>SAT</p>
            </div>
            <div className="flex flex-col items-center font-semibold text-sm">
              <p>DATE</p>
              <p>19 APRIL</p>
            </div>
            <div className="flex flex-col items-center font-semibold text-sm">
              <p>YEAR</p>
              <p>2025</p>
            </div>
          </motion.div>

          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <p
                style={{
                  fontFamily: "'Parisienne', cursive",
                }}
                className="text-xl"
              >
                The Wedding Of
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
            >
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="text-5xl my-6"
              >
                ARI & ULFIA
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              <p className="text-[0.75rem] font-medium italic">
                “And of everything We created a pair, that you may remember (the
                grace of Allah).”
              </p>
              <p className="text-[0.75rem] font-medium">
                Surah Adh-Dhariyat (51:49)
              </p>
            </motion.div>
          </div>
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default Welcome;

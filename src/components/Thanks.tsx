import { motion } from "motion/react";
import Section from "./Section";
import ShadowWrapper from "./ShadowWrapper";

function Thanks() {
  return (
    <Section className="bg-[url('assets/photo_9.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col p-5 h-full">
          <div className="p-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <p
                style={{
                  fontFamily: "'Forum', system-ui",
                }}
                className="text-3xl mb-2"
              >
                THANK YOU
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
            >
              <p className="text-sm font-light">
                It would be our deepest joy and highest honor to be graced with
                your presence as we celebrate a moment so dear to our hearts.
                Your attendance would not only add warmth to our special day but
                would also become a cherished part of a memory we shall carry
                with us forever.
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
                className="text-center text-sm mt-4"
              >
                - ARI & ULFIA -
              </p>
            </motion.div>
          </div>
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default Thanks;

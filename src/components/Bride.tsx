import { motion } from "motion/react";
import Section from "./Section";
import ShadowWrapper from "./ShadowWrapper";
import { Instagram } from "lucide-react";

function Bride() {
  return (
    <Section className="bg-[url('assets/photo_2.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col justify-end p-12 h-full">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <p
                style={{
                  fontFamily: "'Parisienne', cursive",
                }}
                className="text-2xl"
              >
                The Bride
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
                className="text-4xl my-2"
              >
                Ulfia Ningsih
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
                className="text-md"
              >
                THE FIRST DAUGHTER OF
              </p>
              <p className="text-[0.75rem] font-medium">
                Mr. Slamet Mulyono & Mrs. Astutik
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.75 } }}
            >
              <div className="flex items-center mt-2">
                <Instagram size={12} className="mr-1" />
                <p className="text-xs">ulfiaan_</p>
              </div>
            </motion.div>
          </div>
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default Bride;

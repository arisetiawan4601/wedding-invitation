import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Section from "./Section";
import ShadowWrapper from "./ShadowWrapper";
import Button from "./Button";
import clsx from "clsx";
import { motion } from "motion/react";

type Wish = {
  name: string;
  wish: string;
};

function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [form, setForm] = useState({
    name: "",
    wish: "",
    attendance: "YES",
  });
  const [errors, setErrors] = useState({
    name: "",
    wish: "",
    attendance: "",
  });
  const [formError, setFormError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    getWishes();
  }, []);

  async function getWishes() {
    const { data: wishes } = await supabase.from("wishes").select();
    console.log(wishes);

    if (wishes && wishes.length > 0) {
      setWishes(wishes);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!confirming && !confirmed) {
      const validationErrors = { name: "", wish: "", attendance: "" };

      // Validation
      if (!form.name) {
        validationErrors.name = "Please fill with your name";
      }
      if (!form.wish) {
        validationErrors.wish = "Please fill your wish for us";
      }
      if (!form.attendance) {
        validationErrors.attendance = "Please confirm your attendance";
      }

      if (
        validationErrors.name ||
        validationErrors.wish ||
        validationErrors.attendance
      ) {
        setErrors(validationErrors);
        return;
      }

      setConfirming(true);
      const { error } = await supabase.from("wishes").insert({
        name: form.name,
        wish: form.wish,
        attendance: form.attendance == "YES",
      });
      setConfirming(false);
      if (error) {
        setFormError("Something went wrong");
      } else {
        setFormError("");
        setConfirmed(true);
      }
      getWishes();
    }
  }

  return (
    <Section className="bg-[url('assets/x_photo_2.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col px-6 py-12 h-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <p
              style={{
                fontFamily: "'Forum', system-ui",
              }}
              className="text-3xl px-6 mb-2"
            >
              RSVP & WISHES
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
          >
            <p className="px-6 text-sm font-light mb-4">
              We’d be honored by your presence at our wedding—please let us know
              if you can join us by filling out the form below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.6 } }}
          >
            <form onSubmit={handleSubmit} className="bg-black/50 p-6">
              <div className="mb-4">
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  className="outline-none border-white border-b-1 w-full py-3"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-400 mt-4 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  placeholder="Share a prayer or blessing for us"
                  type="text"
                  id="wish"
                  name="wish"
                  className="outline-none border-white border-b-1 w-full py-3"
                  value={form.wish}
                  onChange={handleChange}
                />
                {errors.wish && (
                  <p className="text-red-400 mt-4 text-sm">{errors.wish}</p>
                )}
              </div>

              <div className="mb-6">
                <p className="mb-4 text-sm">Will you attend?</p>
                <div className="flex items-center gap-4">
                  {["YES", "NO"].map((option) => (
                    <label
                      key={option}
                      className={`px-4 py-2 w-full flex justify-center border border-white text-sm cursor-pointer transition-all duration-200
          ${
            form.attendance === option
              ? "bg-white text-black"
              : "bg-transparent text-white hover:bg-white/20"
          }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option}
                        checked={form.attendance === option}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {option.charAt(0) + option.slice(1).toLowerCase()}
                    </label>
                  ))}
                </div>
                {errors.attendance && (
                  <p className="text-red-400 mt-4 text-sm">
                    {errors.attendance}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className={clsx([
                  "mt-4 text-sm w-full flex justify-center items-center",
                  {
                    "bg-white text-black/40 hover:bg-white! cursor-auto!":
                      confirmed,
                  },
                  {
                    "text-white/60": confirming,
                  },
                ])}
              >
                {confirming
                  ? "CONFIRMING ..."
                  : confirmed
                  ? "CONFIRMED"
                  : "CONFIRM"}
              </Button>
              {formError && (
                <p className="text-red-400 mt-4 text-sm">{formError}</p>
              )}
              {confirmed && (
                <p className="text-white mt-4 text-sm text-center font-light">
                  Thanks for your confirmation and wishes
                </p>
              )}
            </form>
          </motion.div>

          {wishes.length != 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.75 } }}
              className="mt-4 h-full bg-black/50 overflow-scroll"
            >
              {wishes.map((wish, index) => (
                <div key={index}>
                  <div className="px-4 py-2">
                    <p
                      style={{
                        fontFamily: "'Forum', system-ui",
                      }}
                      className="text-sm"
                    >
                      {wish.name.toUpperCase()}
                    </p>
                    <p className="font-light text-sm">{wish.wish}</p>
                  </div>
                  <div className="my-2 border-t-[0.5px] border-white/40"></div>
                </div>
              ))}
            </motion.div>
          ) : null}
        </div>
      </ShadowWrapper>
    </Section>
  );
}

export default Wishes;

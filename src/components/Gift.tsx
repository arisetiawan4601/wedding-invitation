import ShadowWrapper from "./ShadowWrapper";
import Section from "./Section";
import BcaLogo from "../assets/bca_logo.png";
import BriLogo from "../assets/bri_logo.png";
import MandiriLogo from "../assets/mandiri_logo.png";
import GopayLogo from "../assets/gopay_logo.png";
import OvoLogo from "../assets/ovo_logo.png";
import DanaLogo from "../assets/dana_logo.png";
import ShopeeLogo from "../assets/shopee_logo.png";
import Button from "./Button";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Dialog from "./Dialog";

const groom = "Ari";
const bride = "Ulfia";

type AccountItemProps = {
  logo: string | string[];
  accountNumber: string;
  accountName: string;
  className?: string;
};

function AccountItem({
  logo,
  accountNumber,
  accountName,
  className,
}: AccountItemProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(accountNumber: string) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(accountNumber);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = accountNumber;

        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
          document.execCommand("copy");
        } catch (error) {
          console.error(error);
        } finally {
          textArea.remove();
        }
      }
    } catch (error) {
      console.log(error);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={clsx([className])}>
      <div className="flex">
        {typeof logo == "string" ? (
          <img src={logo as string} className="h-[16px] mb-2" />
        ) : (
          (logo as string[]).map((l) => (
            <img key={l} src={l} className="h-[16px] mb-2 mr-2" />
          ))
        )}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono">{accountNumber}</p>
          <p className="font-mono text-sm">{accountName}</p>
        </div>
        <Button
          className="text-xs h-min"
          onClick={() => handleCopy(accountNumber)}
        >
          {copied ? "COPIED" : "COPY"}
        </Button>
      </div>
    </div>
  );
}

function Gift() {
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [form, setForm] = useState<{
    nama: string;
    saldo: number | undefined;
    bank: string;
  }>({
    nama: "",
    saldo: undefined,
    bank: "",
  });
  const [errors, setErrors] = useState({ nama: "", saldo: "", bank: "" });

  function handleConfirmation() {
    setConfirmationDialogOpen(true);
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let validationErrors = { nama: "", saldo: "", bank: "" };

    // Validation
    if (!form.nama) {
      validationErrors.nama = "Please fill with yourname";
    }
    if (!form.saldo || Number(form.saldo) <= 0) {
      validationErrors.saldo = "Please fill the gift nominal";
    }
    if (!form.bank) {
      validationErrors.bank = "Please select a bank";
    }

    if (
      validationErrors.nama ||
      validationErrors.saldo ||
      validationErrors.bank
    ) {
      setErrors(validationErrors);
      return;
    }

    const message = `Hai ${groom} & ${bride}!
  
  Selamat menempuh hidup baru ya! 
  Semoga pernikahan kalian selalu dipenuhi cinta, kebahagiaan, dan keberkahan yang melimpah.
  
  Sebagai bentuk doa dan rasa ikut berbahagia, aku titip kado kecil melalui transfer sebesar ${new Intl.NumberFormat(
    "id-ID",
    { style: "currency", currency: "IDR" }
  ).format(
    form.saldo ?? 0
  )}, dikirim melalui ${form.bank.toUpperCase()}. Semoga bisa bermanfaat di awal perjalanan baru kalian.
  
  Salam hangat,
  ${form.nama}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/6285730191777?text=${encodedMessage}`, "_blank");
  };

  return (
    <Section className="bg-[url('assets/photo_6.jpg')] bg-cover bg-center text-white">
      <ShadowWrapper>
        <div className="flex flex-col p-10 h-full">
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
              WEDDING GIFT
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <p className="text-sm font-light">
              With the utmost respect and appreciation for our esteemed guests,
              those who wish to extend their generosity with a gift to the bride
              and groom may kindly do so through the following:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.45 } }}
          >
            <Button onClick={handleConfirmation} className="text-xs mt-4">
              CONFIRMATION
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.6 } }}
            className="mt-10 bg-black/50 p-5"
          >
            <AccountItem
              logo={BcaLogo}
              accountNumber="0184331728"
              accountName="DWI ARI SETIAWAN"
            />
            <div className="w-full border-t-1 border-white my-4"></div>
            <AccountItem
              logo={BriLogo}
              accountNumber="124801002650503"
              accountName="DWI ARI SETIAWAN"
            />
            <div className="w-full border-t-1 border-white my-4"></div>
            <AccountItem
              logo={MandiriLogo}
              accountNumber="1300025618441"
              accountName="DWI ARI SETIAWAN"
            />
            <div className="w-full border-t-1 border-white my-4"></div>
            <AccountItem
              logo={[GopayLogo, DanaLogo, ShopeeLogo, OvoLogo]}
              accountNumber="085730191777"
              accountName="DWI ARI SETIAWAN"
            />
          </motion.div>
          <div></div>
        </div>
        <Dialog
          open={confirmationDialogOpen}
          setOpen={setConfirmationDialogOpen}
        >
          <p
            style={{
              fontFamily: "'Forum', system-ui",
            }}
            className="text-2xl mb-2"
          >
            GIFT CONFIRMATION
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                placeholder="Name"
                type="text"
                id="nama"
                name="nama"
                className="outline-none border-white border-b-1 w-full p-3"
                value={form.nama}
                onChange={handleChange}
              />
              {errors.nama && (
                <p className="text-red-400 mt-2">{errors.nama}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                min={0}
                placeholder="Nominal"
                type="number"
                id="saldo"
                name="saldo"
                className="outline-none border-white border-b-1 w-full p-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                value={form.saldo}
                onChange={handleChange}
              />
              {errors.saldo && (
                <p className="text-red-400 mt-2">{errors.saldo}</p>
              )}
            </div>

            <div className="mb-8">
              <select
                id="bank"
                name="bank"
                value={form.bank}
                onChange={handleChange}
                className="outline-none border-white border-b-1 w-full p-3 appearance-none"
              >
                <option value="">Transfer Via</option>
                <option value="BCA">BCA</option>
                <option value="BRI">BRI</option>
                <option value="MANDIRI">Mandiri</option>
                <option value="Gopay">Gopay</option>
                <option value="ShopeePay">ShopeePay</option>
                <option value="OVO">OVO</option>
                <option value="Dana">Dana</option>
              </select>
              {errors.bank && (
                <p className="text-red-400 mt-2">{errors.bank}</p>
              )}
            </div>

            <Button
              type="submit"
              className="mt-4 text-sm w-full flex justify-center items-center"
            >
              CONFIRM
            </Button>
          </form>
        </Dialog>
      </ShadowWrapper>
    </Section>
  );
}

export default Gift;

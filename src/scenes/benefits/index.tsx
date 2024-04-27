import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { CardWithIcon, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import VisonMissionCard from "./VisonMissionCard";

const visonMission: Array<CardWithIcon> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Our Vision",
    description:
      "To create a confident and competent global workforce where all employees can continuously shine in their career and strive for progression with no limits.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Our Mission",
    description:
      "To empower individuals in their quest for the perfect job by equipping them with the necessary skills and knowledge through comprehensive training programs.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="mx-auto w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>YOUR SUCCESS BEGINS WITH US</HText>
          <p className="my-5 text-base">
            At WAE Education, we believe that every individual has unique potential, and our goal is to unlock this
            potential by providing inidividually crafted pathways to career success.
          </p>
        </motion.div>

        {/* Vison and Mission statement */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {visonMission.map((statement: CardWithIcon) => (
            <VisonMissionCard
              key={statement.title}
              icon={statement.icon}
              title={statement.title}
              description={statement.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

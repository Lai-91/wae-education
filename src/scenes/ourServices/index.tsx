import { SelectedPage, ServiceType } from "@/shared/types";
import services1 from "@/assets/services-1.png";
import services2 from "@/assets/services-2.png";
import services3 from "@/assets/services-3.jpeg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Service from "./Service";

const services: Array<ServiceType> = [
  {
    name: "Job Application Assistance",
    description:
      "We specialize in guiding job seekers through the often daunting job application process. Our services include resume building, interview preparation, and personalized coaching, tailored to meet the specific needs of each candidate.",
    image: services1,
  },
  {
    name: "Professional Training Program",
    description:
      "Recognizing the need for continuous learning in today's dynamic job market, we offer a wide range of training courses. These courses are designed to enhance job-related skills and competencies, whether you're just starting out or looking to advance in your career.",
    image: services2,
  },
  {
    name: "Career Counselling",
    description:
      "Our team of experienced career counselors are dedicated to providing insights into the job market and advice on how to navigate it, helping you make informed decisions about you career path.",
    image: services3,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourservices" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR SERVICES</HText>
          </div>
        </motion.div>
        <div className="mt-10 items-center justify-center gap-8 md:flex">
          {services.map((item: ServiceType, index) => (
            <Service key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;

import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Qué servicios de construcción ofrecen?",
    answer:
      "En GC, ofrecemos una amplia gama de servicios de construcción que abarcan desde proyectos residenciales hasta comerciales e industriales. Esto incluye construcción llave en mano, nivelación de terreno, diseño arquitectónico y más.",
  },
  {
    question: "¿Cuál es la duración típica de un proyecto de construcción?",
    answer:
      "La duración de un proyecto varía según su complejidad y alcance. Proyectos más pequeños pueden tomar semanas, mientras que construcciones más grandes pueden llevar varios meses o incluso años. Establecemos plazos claros en la etapa de planificación.",
  },
  {
    question: "¿Cómo puedo solicitar un presupuesto?",
    answer:
      "Puedes solicitar un presupuesto de nuestros servicios poniéndote en contacto con nosotros a través de nuestro sitio web o número de teléfono. Estaremos encantados de discutir tus necesidades y proporcionarte una estimación precisa.",
  },
  {
    question: "¿Trabajan con subcontratistas o tienen un equipo interno?",
    answer:
      "Contamos con un equipo interno de expertos en construcción y colaboramos con subcontratistas especializados en ciertos aspectos de los proyectos para garantizar una ejecución eficiente y de alta calidad.",
  },
  {
    question: "¿Qué medidas toman para garantizar la seguridad en los lugares de construcción?",
    answer:
      "La seguridad es nuestra prioridad. Cumplimos con todas las regulaciones de seguridad y proporcionamos capacitación constante a nuestro personal. También implementamos protocolos de seguridad en cada proyecto.",
  },
  {
    question: "¿Ofrecen servicios de diseño arquitectónico?",
    answer:
      "Sí, ofrecemos servicios de diseño arquitectónico. Nuestro equipo de arquitectos trabaja estrechamente contigo para dar vida a tus ideas y necesidades en el diseño de tu proyecto.",
  },
  {
    question: "¿Tienen experiencia en proyectos de construcción sostenible?",
    answer:
      "Sí, hemos trabajado en proyectos de construcción sostenible que cumplen con estándares ambientales y de eficiencia energética. Podemos asesorarte sobre opciones sostenibles.",
  },
  {
    question: "¿Qué tipos de clientes han atendido en el pasado?",
    answer:
      "Hemos trabajado con una variedad de clientes, incluyendo particulares, empresas, industrias y gobiernos locales. Nuestra versatilidad nos permite adaptarnos a diferentes necesidades.",
  },
  {
    question: "¿Cómo puedo ponerme en contacto con su empresa para discutir un proyecto?    ",
    answer:
      "Puedes comunicarte con nosotros a través de nuestro correo electrónico o whatsapp. Estamos disponibles para discutir tus proyectos y responder a tus preguntas en cualquier momento.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            ¿Tienes alguna consulta?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Preguntas Frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
    id="FAQ"
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
            }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

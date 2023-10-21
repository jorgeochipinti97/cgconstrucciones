import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className=" flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
  

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">

            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Pisos Llaneados
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
              Logramos pisos llaneados de máxima precisión y durabilidad, adaptados a tus necesidades.
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Pisos Llaneados de Precisión</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Durabilidad Insuperable</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Personalización a Tu Medida</span>
              </li>
            </ul>
          </div>
        </div>
              <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-last">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={'/llaneado.jpeg'}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={'/tinglado.jpeg'}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>

          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
Tinglados
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
            Somos una empresa de construcción especializada en tinglados, pisos nivelados, movimiento de suelo, piletas, proyectado de hormigón gunitado y servicios de bombeo.            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Tinglados a Medida</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Calidad y Durabilidad</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Experiencia en Grandes Proyectos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
  

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">

            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
Piletas
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
Creamos piletas a medida que combinan diseño personalizado, tecnología innovadora y calidad excepcional para transformar tu visión de una piscina en una realidad duradera y hermosa.            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Diseño y Construcción de Piletas Personalizadas</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Tecnología Innovadora</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Piletas de Ensueño</span>
              </li>
            </ul>
          </div>
        </div>
              <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-last">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={'/piletas2.jpeg'}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={'/hormigon.jpeg'}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>

          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
            Servicio proyectado hormigón gunitado 
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
            Nuestro servicio de proyectado de hormigón gunitado se distingue por su precisión y durabilidad. Utilizando tecnología avanzada, aplicamos este material versátil con resultados de alta calidad para diversas estructuras y superficies, adaptándonos a las necesidades específicas de cada proyecto.                  </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Proyectado de Hormigón Gunitado de Precisión</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Tecnología de Vanguardia</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Soluciones a Medida</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
  

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">

            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
Servició de bomba de arrastre
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
            Nuestro servicio de bomba de arrastre destaca por su eficiencia y versatilidad en la transferencia de líquidos y materiales a largas distancias. Equipado con tecnología de punta, brindamos soluciones confiables y eficaces para una variedad de aplicaciones industriales y de construcción.</p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Bombeo de Arrastre Eficiente</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Tecnología de Punta</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Versatilidad en la Construcción</span>
              </li>
            </ul>
          </div>
        </div>
              <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-last">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={'/bombade.jpeg'}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="mt-10 flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={'/mov.jpeg'}
                alt="f1"
                className="rounded-xl  custom-border-gray"
              />
            </div>

          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
            Movimiento de Suelo
                        </h2>
            <p className="mb-12 text-customGrayText leading-loose">
            Llevamos a cabo el movimiento de suelo de forma experta, optimizando recursos y transformando el terreno para asegurar que cada proyecto comience con una base sólida y bien preparada.</p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Movimiento de Suelo Expertamente Ejecutado</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Optimización de Recursos</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Transformación del Terreno</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

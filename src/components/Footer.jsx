import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "___",
    items: ["servicios", "Llave en mano", "FAQS", "Contactanos"],
  },
  {
    title: "Important Links",
    items: [
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="   lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">

              <div className="w-36 flex justify-center md:justify-start mx-auto lg:mx-0 mt-5">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href={'https://wa.link/84svqe'}
                  >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href={'https://wa.link/l4ck8y'}
                  >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">__________</h3>
                <ul>

                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#servicios"
                        aria-label=""
                      >
Servicios
                      </a>
                    </li>
                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#llave"
                        aria-label=""
                      >
Llave en mano
                      </a>
                    </li>
                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#FAQ"
                        aria-label=""
                      >
Faqs
                      </a>
                    </li>
                    <li  className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={'https://wa.link/ws9kl3'}
                        aria-label=""
                      >
Contactanos
                      </a>
                    </li>

                </ul>
              </div>
   
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023. CG CONSTRUCCIONES.
          </p>
        </div>
      </div>
    </footer>
  );
};

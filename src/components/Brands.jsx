import { motion } from "framer-motion";

import { AmazonLogo } from "../assets/logos/AmazonLogo";
import { DropboxLogo } from "../assets/logos/DropboxLogo";
import { NetflixLogo } from "../assets/logos/NetflixLogo";
import { SlackLogo } from "../assets/logos/SlackLogo";
import { SpotifyLogo } from "../assets/logos/SpotifyLogo";
import { StripeLogo } from "../assets/logos/StripeLogo";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-1">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto  md:wscreen">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">

          <div className="flex flex-col w-screen items-center">
            <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
              Confía en nosotros
            </h2>

<div className="flex items-center justify-center">

            <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
              Confía en
            </h2>
            <TailcastLogo />
</div>

          </div>
        </div>
      </div>

    </motion.div>
  </section>
);

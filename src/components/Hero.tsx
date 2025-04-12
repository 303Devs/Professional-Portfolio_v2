import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerate } from "./ui/text-generate.tsx";
import { Vortex } from "./ui/vortex";

import Logo from "../../public/logo-horz-trans.svg";

const SPOTLIGHTS = [
  {
    className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
    fill: "#9300F3",
  },
  {
    className: "left-80 top-28 h-[80vh] w-[50vw]",
    fill: "#A5E1FF",
  },
  {
    className: "h-[80vh] w-[50vw] top-10 left-full",
    fill: "#62D0FF",
  },
];

const Hero = () => {
  return (
    <Vortex
      backgroundColor="transparent"
      rangeY={800}
      particleCount={500}
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <div className="pb-20 pt-20">
        {SPOTLIGHTS.map((props, i) => (
          <Spotlight key={i} {...props} />
        ))}

        <section className="flex justify-center py-20">
          <div className="max-w-fit md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
            <h2 className="uppercase tracking-widest text-xs max-w-80 subpixel-antialiased">
              Web, mobile, and software systems — built with care.
            </h2>

            <TextGenerate
              className="text-[40px] md:text-5xl lg:text-6xl"
              words={"Inspired Solutions,\nLasting Impressions."}
            />

            <p className="tracking-wide text-lg md:text-xl lg:text-2xl font-medium flex flex-wrap justify-center items-center gap-2 mb-10">
              We’re
              <Image
                src={Logo}
                alt="303Devs company logo"
                className="inline-block"
                style={{
                  height: "2.5em",
                  width: "auto",
                  paddingBottom: "0.6em",
                }}
              />
              — a Colorado studio making tech personal.
            </p>

            <a href="#about">
              <MagicButton
                title="Step Inside"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </section>
      </div>
    </Vortex>
  );
};

export default Hero;

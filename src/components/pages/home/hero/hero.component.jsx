// Modules
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Hooks
import { useMemo, useEffect, useState } from "react";

// Components
import Particles from "@tsparticles/react";
import { Divider, Button } from "@nextui-org/react";
import { IoIosAnalytics } from "react-icons/io";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa6";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../../data";

// Styles
import "./hero.styles.css";

export const Hero = () => {
  const [init, setInit] = useState(false);
  const [x, github, linkedin] = socialLinks;

  // Scroll To Section
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOpts = useMemo(
    () => ({
      style: {
        position: "static",
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 160,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    }),
    []
  );

  return (
    init && (
      <div className="relative overflow-hidden hero-container">
        <Particles
          id="tsparticles"
          className="h-[680px]"
          options={particleOpts}
        />
        <div className="absolute top-[40%] -translate-x-1/2 -translate-y-1/2 left-1/2 z-30 flex-col flex items-center justify-top text-center gap-12 max-w-[610px]">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl font-normal flex items-center gap-2">
              TIMOTHY <IoIosAnalytics className="text-7xl" />
              OGUNLEYE
            </h1>

            <Divider className="w-[120px] bg-foreground" />

            <div className="flex gap-2">
              <Button
                as="a"
                className="bg-blue text-white"
                target="_blank"
                href={x.to}
                aria-label={x.label}
                rel="noopener noreferrer"
                radius="full"
                size="md"
                isIconOnly
              >
                <FaXTwitter className="w-6 h-6" />
              </Button>

              <Button
                as="a"
                className="bg-blue text-white"
                target="_blank"
                href={github.to}
                aria-label={github.label}
                rel="noopener noreferrer"
                radius="full"
                size="md"
                isIconOnly
              >
                <FaGithub className="w-6 h-6" />
              </Button>

              <Button
                as="a"
                className="bg-blue text-white"
                target="_blank"
                href={linkedin.to}
                aria-label={linkedin.label}
                rel="noopener noreferrer"
                color="primary"
                radius="full"
                size="md"
                isIconOnly
              >
                <FaLinkedin className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <p className="leading-7">
              👋 Hi! I'm Timothy, a <strong>statistician</strong> and{" "}
              <strong>data scientist </strong>
              focused on advancing statistical computing in Africa. I'm a
              lecturer at Osun State University and Secretary-General of the
              International Association for Statistical Computing. I've also
              developed extensive <strong>educational content</strong> that you
              might benefit from. ❤️
            </p>

            <div className="flex justify-center gap-3">
              <Button
                as="a"
                className="text-2xl font-normal h-14 bg-blue text-white"
                size="lg"
                color="primary"
                radius="sm"
              >
                SUBSCRIBE
              </Button>
              <Button
                className="text-2xl font-normal h-14 border-blue text-white"
                size="lg"
                radius="sm"
                variant="bordered"
                aria-label="Scroll to contact"
                onPress={handleScroll.bind(null, "contact")}
              >
                CONTACT
              </Button>
            </div>
          </div>
        </div>

        <Button
          className="absolute left-1/2 bottom-[1%] -translate-x-1/2 -translate-y-1/2 text-white text-9xl animate-bounce"
          isIconOnly
          radius="none"
          data-hover="false"
          variant="light"
          aria-label="Scroll to intro"
          onPress={handleScroll.bind(null, "intro")}
        >
          <FaChevronDown />
        </Button>
      </div>
    )
  );
};

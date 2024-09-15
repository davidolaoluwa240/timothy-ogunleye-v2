// Components
import { Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../data";

export const Footer = () => {
  const year = new Date().getFullYear();
  const [x, github, linkedin, , , , , googleScholar, researchGate, orcid] =
    socialLinks;

  return (
    <footer className="bg-primary">
      <div className="max-w-[1308px] mx-auto p-6 grid grid-cols-3 items-center">
        <p>Copyright &copy; Dr Timothy Ogunleye {year}</p>
        <div className="flex gap-3 justify-center">
          <Button
            as="a"
            className="text-lg bg-white text-black hover:bg-blue hover:text-white"
            data-hover="false"
            radius="full"
            isIconOnly
            target="_blank"
            aria-label={x.label}
            rel="noopener noreferrer"
            href={x.to}
          >
            <FaXTwitter />
          </Button>

          <Button
            as="a"
            className="text-xl bg-white text-black hover:bg-blue hover:text-white"
            data-hover="false"
            radius="full"
            isIconOnly
            target="_blank"
            aria-label={github.label}
            rel="noopener noreferrer"
            href={github.to}
          >
            <FaGithub />
          </Button>

          <Button
            as="a"
            className="text-xl bg-white text-black hover:bg-blue hover:text-white"
            data-hover="false"
            radius="full"
            isIconOnly
            target="_blank"
            aria-label={linkedin.label}
            rel="noopener noreferrer"
            href={linkedin.to}
          >
            <FaLinkedin />
          </Button>
        </div>

        <div className="flex justify-end">
          <ul className="flex gap-6">
            <li>
              <a
                className="text-blue border-b border-transparent hover:border-blue transition-colors"
                href={googleScholar.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {googleScholar.label}
              </a>
            </li>
            <li>
              <a
                className="text-blue border-b border-transparent hover:border-blue transition-colors"
                href={researchGate.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {researchGate.label}
              </a>
            </li>
            <li>
              <a
                className="text-blue border-b border-transparent hover:border-blue transition-colors"
                href={orcid.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {orcid.label}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

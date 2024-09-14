// Components
import { Image, Button } from "@nextui-org/react";
import { WorkExperience } from "../../";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../../data";

// Images
import timothyImg from "../../../../assets/images/timothy_img.svg";

export const About = () => {
  const [x, github, , resume] = socialLinks;

  return (
    <section
      className="flex flex-col gap-16 max-w-[1100px] py-28 mx-auto"
      id="intro"
    >
      <div className="flex gap-20">
        <Image
          className="block w-[450px] h-[250px]"
          radius="sm"
          src={timothyImg}
          alt="Timothy Ogunleye"
        />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <p>Hi, I'm Dr. Timothy</p>
            <p>
              I specialize in statistical computing and data science, with a
              focus on advancing these fields across Africa and beyond. If you
              need expert guidance in statistical analysis, machine learning, or
              data visualization, I'm here to help.
            </p>

            <p>
              With over 18 years of experience, I’ve collaborated with both
              academia and industry, holding leadership roles like
              Secretary-General of the IASC-AMG. I’m also proficient in R,
              Python, and SQL, with certifications from top institutions like
              <a
                href="https://www.mq.edu.au/"
                target="_blank"
                className="text-blue hover:border-b border-blue transition-colors"
                rel="noopener noreferrer"
              >
                {" "}
                Macquarie University
              </a>{" "}
              and the{" "}
              <a
                href="https://unilag.edu.ng/"
                target="_blank"
                className="text-blue hover:border-b border-blue transition-colors"
                rel="noopener noreferrer"
              >
                University of Lagos.
              </a>
            </p>

            <p>
              I currently teach at{" "}
              <a
                href="https://www.uniosun.edu.ng/"
                target="_blank"
                className="text-blue hover:border-b border-blue transition-colors"
                rel="noopener noreferrer"
              >
                Osun State University
              </a>{" "}
              and lead initiatives such as the Osun R User Group ...{" "}
              <Button
                as="a"
                className="text-blue font-medium cursor-pointer border-blue transition-colors text-base capitalize p-0"
                data-hover="false"
                variant="light"
                size="sm"
              >
                learn more
              </Button>
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              as="a"
              className="text-blue border-blue hover:bg-blue hover:text-white transition-colors"
              variant="bordered"
              radius="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              PUBLICATIONS
            </Button>

            <Button
              as="a"
              className="text-blue border-blue hover:bg-blue hover:text-white transition-colors"
              variant="bordered"
              radius="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              TALKS
            </Button>

            <Button
              as="a"
              className="text-blue border-blue hover:bg-blue hover:text-white transition-colors"
              variant="bordered"
              radius="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={x.label}
              href={x.to}
            >
              X
            </Button>

            <Button
              as="a"
              className="text-blue border-blue hover:bg-blue hover:text-white transition-colors"
              variant="bordered"
              radius="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={github.label}
              href={github.to}
            >
              GITHUB
            </Button>

            <Button
              as="a"
              className="text-blue border-blue hover:bg-blue hover:text-white transition-colors"
              variant="bordered"
              radius="sm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={resume.label}
              href={resume.to}
            >
              RESUME
            </Button>
          </div>
        </div>
      </div>

      <WorkExperience />
    </section>
  );
};

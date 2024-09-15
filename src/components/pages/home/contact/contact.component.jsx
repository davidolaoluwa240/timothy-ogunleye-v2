// Components
import { Divider, Button } from "@nextui-org/react";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../../data";

export const Contact = () => {
  const [x, github, , , email] = socialLinks;

  return (
    <section className="bg-secondary" id="contact">
      <div className="max-w-[1100px] py-28 mx-auto flex flex-col gap-7">
        <div className="flex flex-col items-center max-w-[450px] mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 font-inter">Contact</h2>
          <Divider className="bg-white w-[120px] mb-4" />
          <p className="text-white/80 italic">
            Reach out for talks, trainings, and more
          </p>
        </div>

        <div className="max-w-[700px] mx-auto flex flex-col gap-8">
          <p className="text-center text-lg">
            Feel free to contact me for any question or reachout on trainings
            and consultancy for your organization. If you want to follow my
            work, reach me on{" "}
            <a
              className="text-blue border-b border-transparent hover:border-blue transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href={x.to}
            >
              Twitter
            </a>
            . Otherwise, send me an email at{" "}
            <a
              className="text-blue border-b border-transparent hover:border-blue transition-colors"
              rel="noopener noreferrer"
              href={`mailto:${email.to}`}
            >
              {email.to}
            </a>
          </p>

          <div className="flex justify-center gap-2">
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              className="border-blue text-blue hover:text-white hover:bg-blue text-2xl p-7 uppercase"
              variant="bordered"
              href={github.to}
              radius="sm"
            >
              Github
            </Button>

            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              className="border-blue text-blue hover:text-white hover:bg-blue text-2xl p-7 uppercase"
              variant="bordered"
              href={x.to}
              radius="sm"
            >
              Twitter
            </Button>

            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              className="border-blue text-blue hover:text-white hover:bg-blue text-2xl p-7 uppercase"
              variant="bordered"
              href={`mailto:${email.to}`}
              radius="sm"
            >
              Mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

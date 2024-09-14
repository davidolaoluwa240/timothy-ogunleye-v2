// Components
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../../../data";

export const ServicesModal = ({
  isOpen,
  title,
  description,
  help,
  example,
  icon: Icon,
  children,
  onOpenChange,
}) => {
  const [x, github, , , email] = socialLinks;

  // Rendered Help Items
  const renderedHelpItems = help.items.map((item, i) => (
    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
  ));

  // Rendered Example Items
  const renderedExampleItems = example.items.map((item, i) => (
    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
  ));

  return (
    <Modal
      className="bg-secondary"
      classNames={{ closeButton: "hover:bg-blue active:bg-blue text-2xl" }}
      size="5xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalBody className="px-20 py-10">
          <div className="flex flex-col gap-3 items-center max-w-[650px] mx-auto mb-11">
            <small className="rounded-full border-3 p-7 border-blue text-blue hover:bg-blue hover:text-white transition-colors">
              <Icon className="text-inherit text-5xl" />
            </small>
            <h3 className="text-3xl font-inter">{title}</h3>
            <p
              className="text-center font-normal text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <h4 className="border-b border-white/20 pb-3 font-inter text-lg">
              {help.title}:
            </h4>
            <ul className="ml-4 list-disc list-inside leading-6">
              {renderedHelpItems}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="border-b border-white/20 pb-3 font-inter text-lg">
              {example.title}:
            </h4>
            <ul className="ml-4 list-disc list-inside leading-6">
              {renderedExampleItems}
            </ul>
          </div>
          {children}

          <div className="flex flex-col gap-3 mt-6">
            <h4 className="border-b border-white/20 pb-3 font-inter text-lg">
              Contact me
            </h4>
            <p>
              Tell me more about your project at{" "}
              <a
                className="text-blue border-b border-transparent hover:border-blue transition-colors"
                rel="noopener noreferrer"
                href={`mailto:${email.to}`}
              >
                {email.to}
              </a>{" "}
              to see if we can work together.
            </p>

            <div className="flex gap-2">
              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={github.to}
                className="uppercase border-blue text-blue hover:text-white hover:bg-blue"
                variant="bordered"
                radius="sm"
              >
                Github
              </Button>

              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={x.to}
                className="uppercase border-blue text-blue hover:text-white hover:bg-blue"
                variant="bordered"
                radius="sm"
              >
                Twitter
              </Button>

              <Button
                as="a"
                href={`mailto:${email.to}`}
                className="uppercase border-blue text-blue hover:text-white hover:bg-blue"
                variant="bordered"
                radius="sm"
              >
                Mail
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

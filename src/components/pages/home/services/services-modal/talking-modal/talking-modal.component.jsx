// Components
import { Button } from "@nextui-org/react";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../../../../data";

export const TalkingModal = () => {
  const [, , , , , publication] = socialLinks;

  return (
    <div>
      <Button
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase border-blue text-blue hover:text-white hover:bg-blue"
        variant="bordered"
        radius="sm"
        href={publication.to}
      >
        See All My Previous Talks
      </Button>
    </div>
  );
};

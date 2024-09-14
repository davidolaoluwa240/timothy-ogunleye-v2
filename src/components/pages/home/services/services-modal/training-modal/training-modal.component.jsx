// Components
import { Button } from "@nextui-org/react";

// Data
import { SOCIAL_LINKS as socialLinks } from "../../../../../../data";

export const TrainingModal = () => {
  const [, , , , , , youtube] = socialLinks;

  return (
    <div>
      <Button
        as="a"
        variant="bordered"
        radius="sm"
        target="_blank"
        className="uppercase border-blue text-blue hover:text-white hover:bg-blue"
        href={youtube.to}
        rel="noopener noreferrer"
      >
        See All Youtube Videos
      </Button>
    </div>
  );
};

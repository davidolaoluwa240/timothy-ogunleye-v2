// Hooks
import { useDisclosure } from "@nextui-org/react";

// Components
import { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import {
  ServicesModal,
  TalkingModal,
  ConsultingModal,
  TrainingModal,
} from "../../../";

export const ServicesItem = ({
  title,
  summary,
  icon: Icon,
  modalTitle,
  ...restProps
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ModalChildComponent = {
    talking: TalkingModal,
    consulting: ConsultingModal,
    training: TrainingModal,
  }[modalTitle];

  return (
    <Fragment>
      <ServicesModal
        isOpen={isOpen}
        title={title}
        icon={Icon}
        {...restProps}
        onOpenChange={onOpenChange}
      >
        <ModalChildComponent {...restProps} />
      </ServicesModal>

      <Card className="bg-transparent text-center">
        <CardHeader className="flex-col gap-3">
          <small className="rounded-full border-3 p-7 border-blue text-blue hover:bg-blue hover:text-white transition-colors">
            <Icon className="text-inherit text-5xl" />
          </small>
          <h3
            className="text-2xl text-blue transition-colors border-b-1 border-transparent hover:border-blue cursor-pointer"
            onClick={onOpen}
          >
            {title}
          </h3>
        </CardHeader>

        <CardBody>
          <p className="text-center">{summary}</p>
        </CardBody>

        <CardFooter className="justify-center">
          <Button
            className="text-2xl text-white"
            variant="light"
            isIconOnly
            radius="full"
            onPress={onOpen}
          >
            +
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

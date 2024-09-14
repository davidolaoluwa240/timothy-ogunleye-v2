// Components
import { ServicesItem } from "../../../";

export const ServicesList = ({ items }) => {
  // Rendered Services Items
  const renderedServicesItems = items.map(({ id, ...restItems }) => (
    <ServicesItem key={id} {...restItems} />
  ));

  return <div className="grid grid-cols-3 gap-4">{renderedServicesItems}</div>;
};

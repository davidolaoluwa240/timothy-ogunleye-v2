// Components
import { Divider } from "@nextui-org/react";
import { TreeItem } from "../../";

export const TreeList = ({ items }) => {
  // Rendered Tree Items
  const renderedTreeItems = items.map(({ id, ...restItems }, i, arr) => (
    <TreeItem key={id} isLastItem={arr.length - 1 === i} {...restItems} />
  ));

  return (
    <div className="relative flex justify-between">
      <Divider className="bg-white absolute h-1 top-1/2 -translate-y-1/2" />
      {renderedTreeItems}
    </div>
  );
};

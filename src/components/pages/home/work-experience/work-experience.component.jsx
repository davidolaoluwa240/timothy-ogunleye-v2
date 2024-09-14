// Components
import { TreeList } from "../../../";

// Data
import { WORK_EXPERIENCE_ITEMS as workExperienceItems } from "../../../../data";

export const WorkExperience = () => {
  // Sorted Work Experience Items
  const sortedWorkExperienceItems = workExperienceItems
    .sort((a, b) => a.year - b.year)
    .slice(-4);

  return <TreeList items={sortedWorkExperienceItems} />;
};

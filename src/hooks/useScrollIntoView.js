/**
 * Scroll To A Section Hooks
 */
export const useScrollIntoView = () => {
  /**
   * Handle Scroll
   * @param {string} sectionName
   */
  const handleScroll = (sectionName, e) => {
    // Prevent Browser Defaults
    e.preventDefault?.();
    document
      .getElementById(sectionName)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return { handleScroll };
};

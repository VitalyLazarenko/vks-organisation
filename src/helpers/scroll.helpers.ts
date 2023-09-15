export const scrollToAnchor = (anchor: string) => {
  const section = document.querySelector(anchor);
  if (section) {
    window.scrollTo({
      // @ts-ignore
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

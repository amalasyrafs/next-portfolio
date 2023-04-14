export const classConcatenator = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

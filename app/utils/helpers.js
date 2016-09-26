export const pluralize = (count, singular, plural) => {
  return `${count} ${count === 1 ? singular : plural}`
};

export const isNull = (value: any) => {
  return value === null || value === "" || value === undefined;
};

export const convertToLowerCase = (value: string) => {
  if (isNull(value)) return "";
  return value.toLocaleLowerCase();
};

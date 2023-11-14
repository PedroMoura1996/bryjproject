export const isNull = (value: any) => {
  return value === null || value === "" || value === undefined;
};

export const convertToLowerCase = (value: string) => {
  if (isNull(value)) return "";
  return value.toLocaleLowerCase();
};

export const pickRandomFromArray = <T>(array: T[]): T | null => {
  const size = array.length;
  const randomNumber = Math.floor(Math.random() * size);
  return array.find((_, index) => index === randomNumber) || null;
};

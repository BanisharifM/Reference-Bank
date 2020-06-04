export const toFaNumber = (number: number) => {
  return new Intl.NumberFormat("fa-IR").format(number);
};

export const toFaPhone = (number: number) => {
  return number
    .toLocaleString("fa-IR", {
      useGrouping: false,
    })
    .replace("٫", ".");
};

export const toFaDate = (date: Date | number | undefined) => {
  return new Intl.DateTimeFormat("fa-IR").format(date);
};

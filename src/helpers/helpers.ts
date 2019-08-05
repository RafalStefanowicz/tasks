export class UniqueId {
  constructor(private id: number = 0) {
    this.id = id;
  }
  getId(): number {
    return this.id++;
  }
}

export const getDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export const dateIsToday = (date: string): boolean => date === getDate();

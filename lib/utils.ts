import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type DateSortable = {
  date: string;
};

export function sortByDate<T extends DateSortable>(arr: T[]) {
  return arr.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });
}

import { Post } from "@/.contentlayer/generated";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortByDate(arr: Post[]) {
  return arr.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });
}

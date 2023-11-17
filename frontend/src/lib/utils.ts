import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const baseUrl = "https://resourcify.onrender.com/api";

export const customFetch = axios.create({ baseURL: baseUrl });

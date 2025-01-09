import { nanoid } from 'nanoid';

export const generateShortLink = () => {
  const id = nanoid(4); // Generates a short unique ID
  return `${id}`;
};
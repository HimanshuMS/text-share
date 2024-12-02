import { nanoid } from 'nanoid';

export const generateShortLink = () => {
  const id = nanoid(8); // Generates a short unique ID
  return `${id}`;
};
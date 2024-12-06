import { nanoid } from 'nanoid';

export const generateShortLink = () => {
  const id = nanoid(6); // Generates a short unique ID
  return `${id}`;
};
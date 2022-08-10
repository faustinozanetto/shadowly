/**
 *
 * @param str The input string to capitalize.
 * @returns The capitalized string, if valid.
 */
export const capitalizeString = (str: string): string => {
  return (str && str[0].toUpperCase() + str.slice(1)) || '';
};

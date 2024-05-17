/**
 * It takes a string, removes all non-alphanumeric characters, splits the string into words, and
 * returns the first two letters of the first two words
 * @param {string} string - The string to be converted to initials.
 * @returns The first letter of the first word and the first letter of the second word, e.g. "Cohan Carpentier" -> "CC"
 */
export const getAvatarInitials = (
  string: string | null | undefined,
): string => {
  if (!string) {
    return "";
  }

  const stringClean = string
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .toUpperCase(); // only keep letters and numbers and make it uppercase

  if (stringClean.length <= 2) {
    return stringClean;
  }

  const splittedString = stringClean.split(" ");

  // @ts-expect-error -- copied from other project
  return splittedString[0][0] + (splittedString[1] ? splittedString[1][0] : "");
};

const replaceIfContains = (source: string, replaceFrom: string, replaceTo: string) => {
  if (source.includes(replaceFrom)) {
    return source.replace(replaceFrom, replaceTo);
  }

  return source;
};

/**
 * Generates a variable name by combining prefixes, token information, and token group path.
 *
 * @param {string} prefix - The prefix to prepend to the generated name.
 * @param {Token} token - The token to extract information from.
 * @param {TokenGroup} tokenGroup - The token group to extract path and name information from.
 * @returns {string} The generated variable name.
 */
const variableName = (prefix: string, token: Token, tokenGroup: TokenGroup): string => {
  // Create array with all path segments and token name at the end
  const segments = [...tokenGroup.path];
  if (!tokenGroup.isRoot) {
    segments.push(tokenGroup.name);
  }

  // Replace dash to double dash in the name
  const withDoubleDash = replaceIfContains(token.name, "-", "--");
  segments.push(withDoubleDash);

  // Create string from sentence array and separate it ba "-" symbol.
  const separatedName = segments.join("-").toLowerCase();

  // If the group contains space remove it.
  const finalResult = separatedName.replace(/\s/g, "")

  return `${prefix}-${finalResult}`;
};

export default variableName;

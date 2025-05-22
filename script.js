function firstNonRepeatedChar(s) {
 if (!s) {
    return null;
  }

  const charCounts = {};

  // First pass: count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Second pass: find the first character with a frequency of 1
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCounts[char] === 1) {
      return char;
    }
  }
  // If no non-repeated character is found
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

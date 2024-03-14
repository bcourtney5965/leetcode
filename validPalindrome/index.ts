function isPalindrome(s: string): boolean {
  // convert to all alphenumeric lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // loop over word
  for (
    let first = 0, second = s.length - 1;
    first < second;
    first++, second--
  ) {
    if (s.charAt(first) !== s.charAt(second)) return false;
  }
  return true;
}

console.log(isPalindrome('etqbe'));

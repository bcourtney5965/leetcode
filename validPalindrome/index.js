function isPalindrome(s) {
  // convert to all alphenumeric lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // loop over word
  for (
    var first = 0, second = s.length - 1;
    first < second;
    first++, second--
  ) {
    if (s.charAt(first) !== s.charAt(second)) return false;
  }
  return true;
}
console.log(isPalindrome('etqbe'));

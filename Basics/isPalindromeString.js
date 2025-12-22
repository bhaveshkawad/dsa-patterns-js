function isPalindrome (str) {
  // Normalize the string: lowercase and remove non-alphanumeric chars
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')

  let left = 0
  let right = cleaned.length - 1

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }
    left++
    right--
  }

  return true
}

// 🧪 Test Cases
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('RaceCar')) // true
console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('hello')) // false

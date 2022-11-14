/**
 * The function that calculates the length of a board foot.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-11-05
 */

/**
 * The function that reverse the string
 *
 * @param {string} string The string which will be reversed
 * @returns {string} string.substr(1) The string without the first index
 */
function reverseString (string: string): string {
  // This function reverse a string, suing recursion

  if (string === '') {
    return string
  } else {
    return reverseString(string.substr(1)) + string.charAt(0)
  }
}

/**
 * The main function
 * This main function calls a recursive function.
 *
 */

const aString: string = 'recusrsion'

console.log('')
console.log(`The original string is ${aString}`)
console.log(`The reversed string is ${reverseString(aString)}`)
console.log('\nDone.')

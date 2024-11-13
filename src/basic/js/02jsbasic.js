/* ----------------------------------------------------------------------------------------------------
1. waf that creates a new string by taking first 3 char and last 3 char from the given string. if given 
string is less than 3 character return original string.
"abc---def" => "abcdef"; "ac" => "ac"
---------------------------------------------------------------------------------10.35 10/11/2024 10.55 20min */

const newStringv1 = (str) => {
  if (str.length < 3) {
    return str;
  } else {
    return str.slice(0, 3) + str.slice(-3);
  }
};
// -------------v2
const newString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// newString("123dfjkldf fgdrgs;lfkf;g d;f;ldfggg456")
// newString("aaalkklklkbbbb----")

// ----------------------------------------------------------------------------------------------------
// 2. waf to ruturn first half part of the string of even length from the given string.
// ---------------------------------------------------------------------------------10.55 10/11/2024 11.20 25min

const firstHalfv1 = (str) =>
  (str.length / 2) % 2 === 0
    ? str.slice(0, str.length / 2)
    : str.slice(0, Math.floor(str.length / 2));

// ---------v2
const firstHalf = (str) => str.slice(0, str.length / 2);
firstHalf("temples");
// firstHalf("temp");
// firstHalf("temple");

/* ----------------------------------------------------------------------------------------------------
3. waf to concatenate two strings except their first characters.
---------------------------------------------------------------------------11.20 10/11/2024 11.26 6min*/

const concateString = (str1, str2) => str1.slice(1) + " " + str2.slice(1);

// concateString("abc" , "def")

/* ----------------------------------------------------------------------------------------------------
4. waf to find a number nearest to 100 from given two values.
---------------------------------------------------------------------------11.28 10/11/2024 11.36 8min*/

const nearestTo100 = (num1, num2) => (100 - num1 < 100 - num2 ? num1 : num2);

// nearestTo100(50, 50)

/* ----------------------------------------------------------------------------------------------------
5. waf to check 2 to 4 occurrences of a given character from the given string.
---------------------------------------------------------------------------11.38 10/11/2024 12.05 27min*/

const is2to4occurrence = (str, char) => {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count >= 2 && count <= 4;
};

// is2to4occurrence("hellooooo", "o");

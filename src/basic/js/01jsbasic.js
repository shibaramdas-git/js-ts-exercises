console.log("Hello from basic 01js file");
// ----------------------------------------------------------------------------------------------------
// 3. Wap to replace every character in a given string with the character following it in alphabet.
// 09/11/24 19:50  - 22:00 (2 hr 10 min)
// i.e. abc => bcd
// ----------------------------------------------------------------------------------------------------
// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// const followingStringv1 = str => {
//     let lowCaseStr = str.toLowerCase();
//     let newString = "";
//     let index;

//     for(let char of lowCaseStr) {
//         if (char === "z") {
//             index = 0;
//         } else {
//             index = alphabet.indexOf(char) + 1;
//         }
//         newString += alphabet[index];
//     }
//     return newString;
//  }
// -----------------v2
const followingStringv2 = (str) => {
  let newString = "";
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      newString +=
        char == "z" ? "a" : String.fromCharCode(char.charCodeAt(0) + 1);
    } else if (char >= "A" && char <= "Z") {
      newString +=
        char == "Z" ? "A" : String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      // Append non-alphabetic characters unchanged
      newString += char;
    }
  }
  return newString;
};

// followingStringv2("GdkknYddZz")
// followingStringv2("CAPITALletter")
// followingStringv2("Special chars as it is - 132 , . ")

// ----------------------------------------------------------------------------------------------------
//4. waf to get the current date. => mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy;
// ---------------------------------------------------------------------------------09.50 10/11/2024 10.05 15min
const getReadableDate = (date = new Date()) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

// getReadableDate();

// ----------------------------------------------------------------------------------------------------
// 5.waf that adds "New!" to the given string argument if it is not present already.
// ---------------------------------------------------------------------------------10.05 10/11/2024 10.26 21min
// const addNewInStringv1 = str => {
//     if (str[0] === "N") {
//         if (str[1] === "e") {
//             if (str[2] === "w") {
//                 if (str[3] === "!") {
//                 return str;
//                 } else {
//                     return `New! ${str}`;
//                 }
//             } else {
//                 return `New! ${str}`;
//             }
//         } else {
//             return `New! ${str}`;
//         }
//     } else {
//         return `New! ${str}`;
//     }
// }

// -------v2---------wow amazing
const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

// addNew("hello");
// addNew("New hello");

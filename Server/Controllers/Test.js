str1 = "The Price a single banana is $4.99"
str2 = "The price of two bananas are $8.5"
products = [
    { name : 'Iphone 5',
        description : "phone",
        price : '200$',
        stock : 10
    },
    {
        name : 'Iphone 6',
        description : "phone",
        price : '300$',
        stock : 30
    },
    {
        name : 'Iphone 9',
        description : "phone",
        price : '400$',
        stock : 40
    },
    {
        name : 'Macbook 1',
        description : "laptop",
        price : '400$',
        stock : 40
    },
    {
        name : 'Macbook 3',
        description : "laptop",
        price : '500$',
        stock : 50
    },
    {
        name : 'Macbook 4',
        description : "laptop",
        price : '600$',
        stock : 60
    }
]

console.log( typeof(products))


const getProductDetails = (name)=>{

    products.forEach(p => {
        if(p.name === name || p.name.includes(name) || p.description.includes(name)){
            console.log(`Product Name : ${p.name} `)
            console.log(`Product Descp : ${p.description} `)
            console.log(`Product Price : ${p.price} `)
            console.log(`No of Stock  : ${p.stock} `)
        }
        
    });
}
getProductDetails("Phone")
const getbabanaprices = (n,s1,s2) => {
    if (n === 1) {
        let a1 = []
        a1 = s1.split(' ')

        for ( let c of a1){
            if(c.includes('$')){
           return c
            }
        }
    }
   else if (n === 2) {
        let a2 = []
        a2 = s2.split(' ')

        for ( let c of a2){
            if(c.includes('$')){
           return c
            }
        }
    }
    return 
}
console.log(getbabanaprices(2,str1,str2))
p_str = "{This [is) (a)string }{we have to ]validate {the paranthesis}"
str3 = "{tcdcwc f}wvwjhvj"
str4 = "{tcdcwc() f}wvwj[hvj]"

const isValid = (s)=>{
    let a1 = []
    let count = 0
    let paran = ['{','}',']','[','(',')']
    for ( let c of s){
       if (paran.includes(c)){
       a1.push(c)
       }
}
const openerset = new Set(['(','{','['])
const checker = {'}' : '{' ,']': '[',')' : '('}
let stack = []
for (b of a1){
    if (openerset.has(b)){
        stack.push(b);
    }
    else{
        expectedOpener = checker[b]
        actualOpener = stack.pop()
        if(expectedOpener !== actualOpener){
            return [false,count]
        }
            count++
    }
}
return [true,count] 
}
const output = isValid(str3)
console.log(`The String has valid Paranthesis: ${output[0]} and the no of pairs of Paranthesis are : ${output[1]}`)

// function flatten(inputArray) 
// { 
//     let flattenArray= [];
//     if( inputArray.length === 0  ){
//    flattenArray = [...inputArray]
//         return flattenArray
//     }
//     else{
//         for (a of inputArray){
//              if (!Array.isArray(a)){
//                 flattenArray.push(a)
//             } 
//             else{
//                 flattenArray.push(...flatten(a))
//             }
//         }
//     }
//     return flattenArray
//  }
//  console.log(flatten([1,[2,[3,[4,[5]]]]]))

// function uniqueBy(arr, key) {

//     for (let k of arr){
//     ind = k.find(key)
//     }
//     console.log(ind)
//   }
//   uniqueBy([{x:1,y:2},{x:2,y:3}],'x')


/**
 * Convert a string into its zigzag traversal over `numRows`.
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
      }
    
      // 2. Create an array of empty strings, one per row.
      const rows = new Array(numRows).fill('');
    
      // 3. Track which row we’re on, and direction (1 = down, -1 = up).
      let currentRow = 0;
      let direction = 1;
    
      // 4. Distribute each character into the correct row.
      for (let ch of s) {
        rows[currentRow] += ch;
        // bounce at top or bottom
        if (currentRow === 0) {
          direction = 1;
        } else if (currentRow === numRows - 1) {
          direction = -1;
        }
        currentRow += direction;
      }
    
      // 5. Concatenate all rows and return.
      return rows.join('');
    }

const out = convert('PAYPALISHIRING', 3);
console.log(out)
  

function reverse(x) {
    const INT_MAX =  2147483647
    const INT_MIN = -2147483648      
    console.log(INT_MAX, INT_MIN)
    // 1. Extract sign: let sign = x < 0 ? -1 : 1
    let sign = x<0 ? -1 : 1
    
    // 2. Work with absolute value: let absX = Math.abs(x)

    let absX = Math.abs(x)

    // 3. Initialize result container: let rev = 0
    let rev = 0
    while (absX > 0) {
       r = absX%10;
       absX = Math.floor(absX/10);
       rev = rev*10 + r
    }
    if (
        rev >  INT_MAX || rev < INT_MIN
      ) {
        return 0;
      }
    return sign*rev
  }

  const out2 = reverse(1534236469)
  console.log(out2)


  var myAtoi = function(s) {
    const INT_MAX =  2**(31)- 1
    const INT_MIN = -(2**(31))
    let n = s.length
    let i = 0
    while( i < n && s[i] == ' '){
           i++
    }

    if(s[i]=== '-'){
        var sign = -1
        i++
    }
    else if (s[i] === '+' ){
         sign = +1
         i++
    }
    else{
        sign = +1
    }

    let value= 0;
    while(i< n){
         code = s[i].charCodeAt(0)
        if( code <48 || code > 57){
            break;
        }
        let digit = code - 48
        value = value*10 +  digit 
        i++
    }

    value = sign * value
    value = value> INT_MAX ? INT_MAX :value
    let output = value< INT_MIN ? INT_MIN : value 

    return output
    
  };
  const out3 = myAtoi(' 21474836460')
  console.log(out3)

  var isPalindrome = function(x) {

    if (x< 0){
        return false
    }
    let  n = x
    let rev = 0
    while( n > 0){
    let r = n%10
    n = Math.floor(n / 10)
    rev = rev*10+r
    }
    if ( rev === x){
        return true
    }
    else{
        return false
    }
       
    
  };

  const out4 = isPalindrome(121)
  const out5 = isPalindrome(-121)
  const out6 = isPalindrome(10)
  console.log(out4)
  console.log(out5)
  console.log(out6)


  var isMatch = function(s, p) {
    
    const m = s.length, n = p.length;

  // dp[i][j] = true if s[i..m-1] matches p[j..n-1]
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

  // Empty string matches empty pattern
  dp[m][n] = true;

  // Fill table bottom-up
  for (let i = m; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // Does s[i] match p[j]? (i < m to avoid overrun)
      const firstMatch = i < m && (p[j] === s[i] || p[j] === '.');

      if (j + 1 < n && p[j + 1] === '*') {
        // Two possibilities:
        // 1) Treat “x*” as zero occurrences → skip p[j] and p[j+1]
        // 2) If firstMatch, consume one char of s and stay on same p[j] (to allow more repeats)
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        // No '*' — must consume one char from both
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }

  return dp[0][0];
    
  };


  console.log(isMatch('aa', 'a'))
  console.log(isMatch('aa', 'a*'))
  console.log(isMatch('ab', '.*'))
  console.log(isMatch('aa', 'a'))

  var maxArea = function(height) {
   let mArea = 0
    n =  height.length
    for ( let j = 0 ; j < n ; j++){
         for ( let k = j+1 ; k < n ; k++){

            let h = Math.min(height[j], height[k] )
            let w = k-j;
            let area  = w*h

            if(mArea < area){
                mArea = area
            }  
         }
    }
    return mArea
    
  };

  console.log(maxArea([1,8,6,2,5,4,8,3,7]))

  var maxArea2= function(height) {
    let mArea = 0
     n =  height.length
     let l = 0 , r= n-1
     while(l < r){
        let h = Math.min(height[l], height[r])
        let w = r-l;
        let area  = w*h
        console.log(area)
        if(mArea < area){
            mArea = area
        }  
        if (height[l] < height[r]) l++
        else r--;
        
     }
     return mArea
     
   };
 
   console.log(maxArea2([1,8,6,2,5,4,8,3,7]))

   var longestCommonPrefix = function(strs) {
   
    let prefix = strs[0];


    for ( let i =0; i< strs.length;i++){
    while(strs[i].indexOf(prefix)!==0){
        prefix = prefix.slice(0,-1)  
    }
    }
    return prefix
   
   };

   console.log(longestCommonPrefix(["flower","flow","flight"]))

//    var letterCombinations = function(digits) {

//     const phoneMap = {
//         '2': ['a','b','c'],
//         '3': ['d','e','f'],
//         '4': ['g','h','i'],
//         '5': ['j','k','l'],
//         '6': ['m','n','o'],
//         '7': ['p','q','r','s'],
//         '8': ['t','u','v'],
//         '9': ['w','x','y','z'],
//       };

//       if (!digits || digits.length === 0) return [];
  
//       const result = [];
      
//       // backtracking helper
//       function backtrack(index, path) {
//         // once we've chosen one letter per digit, record the combo
//         if (path.length === digits.length) {
//           result.push(path);
//           return;
//         }
        
//         // get the letters for this digit
//         const letters = phoneMap[digits[index]];
//         for (let letter of letters) {
//           backtrack(index + 1, path + letter);
//         }
//       }
      
//       backtrack(0, '');
//       return result;
  

//    };
//    console.log(letterCombinations("27"))
//    console.log(letterCombinations("234"))
//    console.log(letterCombinations("2345"))

   var letterCombinations2 = function(digits) {

    const phoneMap = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
      };

      if (!digits || digits.length === 0) return [];
  
      const result = [];

    function mapping (i, olddigitletter){
            if(olddigitletter.length === digits.length){
                result.push(olddigitletter);
                return
            }

            for (let newdigitletter of phoneMap[digits[i]] ){
                mapping(i+1,olddigitletter + newdigitletter)
            }

        }
        mapping(0,'');
      return result;
  

   };
console.log(letterCombinations2("27"));
 
var isValidP = function(s) {

    if (s.length===1){
        return false
    }
    let stack = []
    const mapping = {']':'[','}':'{',')':'('}

    for ( let ch of s){
        if (['[','{','('].includes(ch)){
            stack.push(ch)
        }
        else if ([']','}',')'].includes(ch)){
            if(mapping[ch]!==stack.pop()){
                return false
            }
            
        }
    }

    if( stack.length === 0){
        return true
    }
    else{
        return false
    }
    
   };
console.log(isValidP("(]"))

var removeDuplicates = function(nums) {
    n = nums.length

    let result = []

    for ( let num of nums){
        if ( !result.includes(num)){
            result.push(num)
        }
    }
   
    k = result.length

    for ( i= result.length ; i <n ;i++){
        result.push('_')
    }

    return ( k, result)

};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([0,0,1]))

var twoSum = function(nums, target) {

    let dict = {}
    var result = [];

    for (let i= 0; i< nums.length;i++){
       dict[nums[i]] = i
    }
   console.log(dict)
   
    for (let i= 0; i< nums.length;i++){
        check = target-nums[i]

        if ( check in dict && check !== nums[i]){
              if(!(dict[check] in result)) {result.push(dict[check])}
              if(!(result.includes(i))) {result.push(i)}
        }
      

    }

    return result
    
};
console.log(twoSum ([2,7,11,15],9))

var plusOne = function(digits) {
numstring = digits.join('')
console.log(numstring)
number = BigInt(numstring)
number++
resultString = number.toString()
const numberStringArray  = resultString.split('')
let numberArray = []
for ( let i of  numberStringArray ){
    numberArray.push(parseInt(i))
}
return numberArray
    
};
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

var searchInsert = function(nums, target) {

    let i= 0 ; j = nums.length-1
    while(i<=j){

    mid = Math.floor((i+j) / 2);

    if(target ===nums[mid]){
        return mid

    }
    else if (target < nums[mid]){
        j = mid-1
    }
    else {
        i = mid+1
    }
}
return i

}  ;
console.log(searchInsert([1,3,5,6],2))

var generate = function(numRows) {

   let triangle = [[1]]

   for ( let row = 1; row< numRows;row++){
        prev = triangle[row-1]
        current = new Array(row)
        current[0]= 1
        current[row]= 1
        
        for ( let e=1; e<row;e++){
            current[e]= prev[e-1]+prev[e];

        }
        triangle.push(current)

   }
return triangle
       
};

console.log(generate(4))

var numJewelsInStones = function(jewels,stones) {
    let count =  0
    jewelsSet =new Set(jewels)
    for (let stone of stones){
        if(jewelsSet.has(stone))count++ 
    } 
    return count
};
console.log(numJewelsInStones('aA','aAAbbbbb'))

var addBinary = function(a, b) {
    let inta = BigInt(a,2)
    const intb = BigInt(b,2)
    let c= inta+intb
    return c.toString(2)
};
console.log(addBinary(11,1))

var lengthOfLastWord = function(s) {
    let sarray = s.split(' ')
    const reversedarray = sarray.reverse()
    lastword = reversedarray[0]
    return lastword.length
    
};

console.log(lengthOfLastWord("Hello World"))

// var longestPalindrome = function(s) {
//    let i = 0;
//    let j = s.length
//     while (i < j){
//         if(s[i]===s[j]){
//             i++
//         }
//     }
    
// };

// console.log(longestPalindrome("bdaad"))

var calculate = function(s) {
    
    let stack = [];
    let num = 0;
    let sign = '+';
    s = s.replace(/\s+/g, ''); 

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (!isNaN(c)) {
            num = num * 10 + parseInt(c);
        }

        if (isNaN(c) || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(stack.pop() * num);
            } else if (sign === '/') {
                // Truncate toward zero like in integer division
                let last = stack.pop();
                stack.push(last < 0 ? Math.ceil(last / num) : Math.floor(last / num));
            }

            sign = c;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};


console.log(calculate('3+4/2'))


var calculate1 = function(s) {
    var  stack = []
    num = 0
    sign = '+'
    for ( let i = 0;i < s.length;i++){
    let c = s[i]
    if ( !(isNaN(c))){
        num = c
    }
    if(isNaN(c) || i === s.length-1){

        if ( c === '+'){
            stack.push(num)
        }
        if ( c === '-'){
            stack.push(sign+num)
        }

        num = 0
        sign = c
        
    }
  
    }
    console.log(stack)
    return null
};
console.log(calculate1('3+4-2'))

var lengthoflastword = function(s) {
    const wordarray = s.trim().split(" ").reverse()
    return wordarray[0].length
};

console.log(lengthoflastword("This is last word"))

var CountandSay = (n)=>{

   let num = "1";

   for (let j=1;j < n ; j++){
    let current = "";
    let count = 1;
    for (let i=1;i<=num.length;i++){             
        if(num[i]=== num[i-1]){
            count++;
        }
        else 
        {
            current+=count.toString()+num[i-1]
            count = 1
        }
    }
    num = current;
   }
    return num; 
}

console.log(CountandSay(5));

var removeElement = function(nums, val) {
    

    let k = 0;
    
    for ( let i = 0 ; i < nums.length ; i++){
        
        if( nums[i]!== val){
            nums[k] = nums[i]
            k++
        }
    
}      

console.log(nums)
    return k
};

console.log(removeElement([3,2,2,3], 3))


var merge = function(nums1, m, nums2, n) {
    let j = n-1;
    let i = m-1;
    let k = m+n-1;
   
      while(j >= 0){
          if ( nums1[i]>= nums2[j]){
            nums1[k]= nums1[i]
            i--;
          }
          else {
           nums1[k] = nums2[j]
            j--;
          }
          k--;
      }
  
      return nums1
  };

  console.log(merge( [1,2,3,0,0,0],3,[2,5,6],3))

  var removetwoDuplicates = function(nums) {
    let k = 2

    for ( i=2;i<nums.length;i++){

        if (nums[i] !== nums[k-2]){

            nums[k]=nums[i]

            k++
               
        }

    }
    

    return k
  };

  console.log(removetwoDuplicates([1,1,1,2,2,3]))
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) 
  {
    const char = s[i];

    if(map[char]) 
    {
      if (stack.pop() !== map[char]) 
      {
        return false;
      }
    } else 
    {
      stack.push(char);
    }
  }

  return stack.length === 0;
    
};

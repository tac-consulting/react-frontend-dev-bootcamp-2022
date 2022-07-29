const palin = () => {
  var num = 565,
    rev = 0,
    cpy = num;
  while (num > 0) {
    var n = num % 10;
    rev = rev * 10 + n;
    num = parseInt(num / 10);
  }
  if (rev === cpy) console.log("palindrome number");
  else console.log("Not a palindrome number");
};
palin();

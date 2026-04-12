# 1.
(function () {
  var a = b = 5;
})();
console.log(b); // ?
console.log(a); // ?
Ans:
5
ReferenceError
Reason => it become var a = b & b = 5 (it become global scope unintensionally but not in strict mode) so a var and var is functional scope so it become undefined outisde function.

# 2.
(function () {
  console.log(this);
})();
Ans: 
In browser → window
In strict mode → undefined

# 3. 
var x = 10;
(function x() {
  console.log(x);
  var x = 20;
})();


4. IIFE + closure in loop
for (var i = 0; i < 3; i++) {
  (function () {
    console.log(i);
  })();
}
✅ Answer:
0
1
2
🧠 Why?

Each IIFE runs immediately with current i

⚡ 5. Without IIFE (compare)
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
✅ Answer:
3
3
3

👉 Classic closure issue

⚡ 6. Fix using IIFE
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  })(i);
}
✅ Answer:
0
1
2
⚡ 7. Arrow function IIFE
(() => {
  console.log(this);
})();
✅ Answer:

👉 this is inherited from outer scope (lexical)

⚡ 8. IIFE returning value
var result = (function () {
  return 10;
})();

console.log(result); // ?
✅ Answer:
10
⚡ 9. IIFE + hoisting trap
(function () {
  console.log(a);
  var a = 10;
})();
✅ Answer:
undefined

👉 Due to hoisting

⚡ 10. IIFE syntax error trick
function () {
  console.log("Hi");
}();
❌ Answer:

👉 Syntax Error

🧠 Why?
Needs parentheses:
(function () {
  console.log("Hi");
})();
⚡ 11. Unary operator trick
!function () {
  console.log("Hello");
}();
✅ Answer:
Hello

👉 ! forces it to be an expression → valid IIFE

⚡ 12. Function vs IIFE confusion
(function () {
  console.log(typeof function f(){});
})();
✅ Answer:
function


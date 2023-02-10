var x = 1
function foo() {
  console.log(x);
}

function bar() {
  var x = 2
  foo()
}
// 函数的作用域是在它定义的时候就决定的
bar()
const add = function () {
  console.log(2 + 3);
};
add();

// b truyền function vào function và sử dụng
function runTwice(fun) {
  fun();
  fun();
}
runTwice(add);
runTwice(function () {
  console.log("hello");
});
// c
function updateButton() {
  const button = document.querySelector(".btn-1");

  setTimeout(function () {
    button.innerHTML = "finished";
  }, 2000);
}
// d
function updateButton2() {
  document.querySelector(".btn-2").innerHTML = "loading...";
  setTimeout(function () {
    const button2 = document.querySelector(".btn-2");
    button2.innerHTML = "finished ";
  }, 2000);
}
// e
function addToCart() {
  const elementAdd = document.querySelector(".display");

  elementAdd.innerHTML = "added";
  setTimeout(() => {
    elementAdd.innerHTML = "";
  }, 2000);
}

window.addEventListener("load", function () {
  let a = 123;  
  let obj = {a};
  const str = `a: ${123}, obj.a: ${obj.a}`;
  document.getElementById("test").innerHTML = str;
});

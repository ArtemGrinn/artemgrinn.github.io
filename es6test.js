window.addEventListener("load", function () {
  let a = 123;  
  let obj = {a};
  let time = new Date();
  const str = `a: ${123}, obj.a: ${obj.a}, time: $(time)`;
  document.getElementById("test").innerHTML = str;
});

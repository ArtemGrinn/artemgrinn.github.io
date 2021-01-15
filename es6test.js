window.addEventListener("load", function () {
  let a = 123;  
  let obj = {a};
  let time = new Date();
  const str = `a: ${123}, obj.a: ${obj.a}, time: ${time}, UA: ${navigator.userAgent}`;
  document.getElementById("test").innerHTML = str;
});

window.onerror = function (msg, url, line, col, obj) {
  alert(msg + '->' + navigator.userAgent + ' -> ' + url + " : " + line + "," + col + " " + (obj ? obj.stack : obj));     
};

function reverseLinkedList(curr, prev) {
  if (curr == null)
    return prev;
  let currNext = curr.next;
  curr.next = prev;
  return reverseLinkedList(currNext, curr);  
}
function printLinkedList(list, printer) {  
  printer(list.value);
  if (list.next == null)
    return;
  printLinkedList(list.next, printer);
}

const linkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printLinkedList(reverseLinkedList(linkedList), console.log);

window.addEventListener("load", function () {
  let a = 123;  
  let obj = {a};
  let time = new Date();
  const str = `a: ${123}, obj.a: ${obj.a}, time: ${time}`;
  document.getElementById("test").innerHTML = str;
});


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

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
  return reversedList = reverseLinkedList(currNext, curr);  
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
const reversedList = reverseLinkedList(linkedList);
for (item in reversedList)
  console.log(item.value);

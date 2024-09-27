const id = "uid22ds1";
let amount = 1;
localStorage.setItem(id, 1);

let read = { ...localStorage };

console.log(read);

let item = { uid22ds1: "1" };

for (let id in item) {
  console.log(item[id]);
}

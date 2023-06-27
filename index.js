

count = 0;
let countEd = document.getElementById("count-ed");
let counter = document.getElementById("update")

function increment() {
   count += 1;
   countEd.textContent = count;
}

function save() {
   console.log(count);
   counter.textContent += count + "-";
   countEd.textContent = 0;
   count = 0;
}
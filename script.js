// You code here
const table = document.querySelector("#table");
const button = document.querySelector("#add-row");
const select = document.querySelector("#select");

let isMouseDown = false

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

function colorize(event) {
  const target = event.target;
  if (event.target.tagName === "TD") {
    if (target.className === color) {
      target.className = "";
    } else {
      target.className = color;
    }
  }
}

let color = "red";

select.addEventListener("change", function (event) {
  color = event.target.value;
});
table.addEventListener("click", colorize);
button.addEventListener("click", makeRow);

table.addEventListener("mousedown", function(event){
    isMouseDown = true
    colorize(event)
})

table.addEventListener("mouseup", function(event){
    isMouseDown = false
})

table.addEventListener("mouseover", function(event){
    if (isMouseDown){
        colorize(event)
    }
})

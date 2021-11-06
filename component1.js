let drawArea = document.querySelector(".drawArea");
let MainDiv = document.createElement("div");
MainDiv.setAttribute(
  "style",
  `     height: 400px;
  width: 50%;
  background-color: #d3a1a154;
  display: flex;
  position: absolute;`
);
let defaultValue = drawArea.getAttribute("data-barHeightDefault");
let optionButton = document.createElement("select");
let innerTextForSelect = ``;
const heights = drawArea.getAttribute("data-barHeights");
JSON.parse(heights).forEach((x) => {
  if (x == defaultValue)
    innerTextForSelect =
      innerTextForSelect + `<option value = "${x}" selected>${x}</option>`;
  else
    innerTextForSelect =
      innerTextForSelect + `<option value = "${x}" >${x}</option>`;
});
let Columns = document.createElement("div");
Columns.setAttribute(
  "style",
  `    
  height: 100%;
  width: 100%;
    display: flex;
    position: absolute;`
);
optionButton.addEventListener("change", (event) => {
  const barValues = event.target.value;

  Columns.innerHTML = "";
  Array.from({ length: barValues }, () =>
    Math.floor(Math.random() * 100)
  ).forEach((h1) => {
    let divH1 = document.createElement("div");
    divH1.setAttribute("class", "bar");
    divH1.setAttribute(
      "style",
      `    position: relative;
  height: ${h1}%;
  width: 10px;
  background-color: red;
  top: 100%;
  transform: translateY(-100%);
  margin:0 2px ;`
    );
    Columns.appendChild(divH1);
  });
});

Columns.innerHTML = "";
Array.from({ length: defaultValue }, () =>
  Math.floor(Math.random() * 100)
).forEach((h1) => {
  let divH1 = document.createElement("div");
  divH1.setAttribute("class", "bar");
  divH1.setAttribute(
    "style",
    `    position: relative;
    height: ${h1}%;
    width: 10px;
    background-color: red;
    top: 100%;
    transform: translateY(-100%);
    margin:0 2px ;`
  );
  Columns.appendChild(divH1);
});

optionButton.innerHTML = innerTextForSelect;
MainDiv.appendChild(Columns);
drawArea.appendChild(optionButton);
drawArea.appendChild(MainDiv);

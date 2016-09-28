/* eslint no-param-reassign: "off" */
function append(parent, child) {
  parent.appendChild(child);
}

function cleanUpTheElement(element) {
  element.innerHTML = "";
}

function addHeadline(result) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const liText = document.createTextNode("WIKIPEDIA");
  const spanText = document.createTextNode("VIEWER");

  li.setAttribute("id", "headline");
  append(li, liText);
  append(span, spanText);
  append(li, span);
  append(result, li);
}
module.exports = function (data) {
  const resultContainer = document.getElementById("result");


  cleanUpTheElement(resultContainer);
  if (data[1]) {
    data[1].forEach((title, index) => {
      const entry = document.createElement("li");
      const a = document.createElement("a");
      const aText = document.createTextNode(title);
      const p = document.createElement("p");
      const pText = document.createTextNode(data[2][index]);

      entry.setAttribute("class", "entry");
      a.setAttribute("href", data[3][index]);
      a.setAttribute("class", "wiki-links");
      append(a, aText);
      append(p, pText);
      append(entry, a);
      append(entry, p);
      append(resultContainer, entry);
    });
  } else {
    addHeadline(resultContainer);
  }
  if (document.getElementById("temp-script")) {
    document.getElementById("temp-script").remove();
  }
};

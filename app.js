const main = document.querySelector(".main");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");

function tryAni() {
  main.classList.add("slowRe");
}

setInterval(tryAni, 1000);

// I was reading documentation about promises and catch and then, i used it here but i named some unnamed functions which were i code and changed it little bit, currently it is only used to find JSON files

function JSONget(jsonFile) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.open("GET", jsonFile);

    req.addEventListener("load", function checkStatus() {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    });

    req.addEventListener("error", function NetError() {
      reject(Error("Network error"));
    });

    req.send();
  });
}

JSONget("./text.json").then(function loadPara(response) {
  const text = JSON.parse(response).techArt;
  p1.textContent = text.p1;
  p2.textContent = text.p2;
  p3.textContent = text.p3;
  p4.textContent = text.p4;
});

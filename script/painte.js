let color = document.querySelector("#color");
let range = document.querySelector("#range");
let label = document.querySelector("#label");
let btnHouse = document.querySelector(".btnHouse");
let btnBlank = document.querySelector(".btnBlank");
let btnTree = document.querySelector(".btnTree");
let btnCat = document.querySelector(".btncat");
let btnReset = document.querySelector(".btnReset");
let btnErase = document.querySelector(".btnErase");
let pickedcolor;
let pickedLinewidth = 10;
//
color.addEventListener("change", (event) => {
  pickedcolor = event.target.value;
});
range.addEventListener("input", (event) => {
  pickedLinewidth = event.target.value;
  label.innerHTML = pickedLinewidth;
});
//
window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  let inH = 150;
  let inW = 550;
  canvas.height = window.innerHeight - inH;
  canvas.width = window.innerWidth - inW;
  window.addEventListener("resize", function () {
    canvas.height = window.innerHeight - inH;
    canvas.width = window.innerWidth - inW;
  });
  //
  let painting = false;
  function startP(e) {
    painting = true;
    draw(e);
  }
  function endP() {
    painting = false;
    ctx.beginPath();
  }

  //For responsiv
  let clX = 435;
  var x = window.matchMedia("(max-width: 1000px)");
  myFunction(x);
  x.addListener(myFunction);
  //
  function myFunction(x) {
    if (x.matches) {
      clX = 100;
      inW = 250;
      canvas.height = window.innerHeight - inH;
      canvas.width = window.innerWidth - inW;
    } else {
      clX = 435;
      inW = 550;
    }
  }
  //
  btnHouse.addEventListener("click", function () {
    canvas.style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.querySelector(".house").style.display = "block";
    document.querySelector(".trees").style.display = "none";
    document.querySelector(".cat").style.display = "none";
    ctx.clearRect(0, 0, window.innerWidth - inW, window.innerHeight - inH);
  });
  btnTree.addEventListener("click", function () {
    canvas.style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.querySelector(".trees").style.display = "block";
    document.querySelector(".house").style.display = "none";
    document.querySelector(".cat").style.display = "none";
    ctx.clearRect(0, 0, window.innerWidth - inW, window.innerHeight - inH);
  });
  btnCat.addEventListener("click", function () {
    canvas.style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.querySelector(".cat").style.display = "block";
    document.querySelector(".house").style.display = "none";
    document.querySelector(".trees").style.display = "none";
    ctx.clearRect(0, 0, window.innerWidth - inW, window.innerHeight - inH);
  });
  btnBlank.addEventListener("click", function () {
    canvas.style.backgroundColor = "rgb(255, 255, 255)";
    ctx.clearRect(0, 0, window.innerWidth - inW, window.innerHeight - inH);
  });
  btnReset.addEventListener("click", function () {
    ctx.clearRect(0, 0, window.innerWidth - inW, window.innerHeight - inH);
  });
  btnErase.addEventListener("click", function () {
    pickedcolor = "white";
  });
  //
  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = pickedLinewidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = pickedcolor;
    ctx.lineTo(e.clientX - clX, e.clientY - 80);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - clX, e.clientY - 80);
  }
  //
  canvas.addEventListener("mousedown", startP);
  canvas.addEventListener("mouseup", endP);
  canvas.addEventListener("mouseout", endP);
  canvas.addEventListener("mousemove", draw);
});

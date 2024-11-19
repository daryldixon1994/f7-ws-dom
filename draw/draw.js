let startButton = document.getElementById("startDrawingBtn");
let stopButton = document.getElementById("stopDrawingBtn");
let canvas = document.getElementById("drawingCanvas");
let colorInput = document.querySelector("input[type='color']");
let ctx = canvas.getContext("2d");
console.log(ctx);
let drawing = false;
let color = "";
colorInput.addEventListener("change", (e) => {
  color = e.target.value;
});
console.log(color);
// draw function
function draw(event) {
  if (!drawing) return;
  ctx.lineWidth = 10;
  ctx.lineCap = "square";
  ctx.strokeStyle = color;
  ctx.lineTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
}

// mousedown handler
function handleMouseDown(event) {
  drawing = true;
  ctx.beginPath();
  canvas.addEventListener("mousemove", draw);
}

// mouseup handler
function handleMouseUp() {
  drawing = false;
  ctx.beginPath();
  canvas.removeEventListener("mousemove", draw);
}

// Function to start drawing
function startDrawing() {
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
}

// Function to stop drawing
function stopDrawing() {
  drawing = false;
  canvas.removeEventListener("mousedown", handleMouseDown);
  canvas.removeEventListener("mouseup", handleMouseUp);
}

// Our event listeners
startButton.addEventListener("click", startDrawing);
stopButton.addEventListener("click", stopDrawing);

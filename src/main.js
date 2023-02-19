// Triangle calcualtion
document.getElementById("btn-triangle").addEventListener("click", function () {
  const base = getInputElementId("triangle-base");
  const height = getInputElementId("triangle-height");

  const isValid = validate(base, height);

  if (isValid !== 0) {
    const area = 0.5 * base * height;

    id += 1;
    const element = "Triangle";
    updateArea(id, element, area.toFixed(2));
  } else {
    alert("Your input should only be non-negative numbers");
  }
});

// Rectangle calcualtion
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const width = getInputElementId("rectangle-width");
  const length = getInputElementId("rectangle-length");

  const isValid = validate(width, length);

  if (isValid !== 0) {
    const area = width * length;

    id += 1;
    const element = "Rectangle";
    updateArea(id, element, area.toFixed(2));
  } else {
    alert("Your input should only be non-negative numbers");
  }
});

// Parallelogram calcualtion
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const area = 10 * 12;

    id += 1;
    const element = "Parallelogram";
    updateArea(id, element, area.toFixed(2));
  });

// Rhombus calcualtion
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const width = getInputElementId("rectangle-width");
  const length = getInputElementId("rectangle-length");
  const area = 0.5 * 16 * 8;

  id += 1;
  const element = "Rhombus";
  updateArea(id, element, area.toFixed(2));
});

// Pentagon calcualtion
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const width = getInputElementId("rectangle-width");
  const length = getInputElementId("rectangle-length");
  const area = 0.5 * 6 * 10;

  id += 1;
  const element = "Pentagon";
  updateArea(id, element, area.toFixed(2));
});

// Ellipse calcualtion
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const width = getInputElementId("rectangle-width");
  const length = getInputElementId("rectangle-length");
  const pi = 3.14;
  const area = pi * 10 * 4;

  id += 1;
  const element = "Ellipse";
  updateArea(id, element, area.toFixed(2));
});

// Go to blog
document
  .getElementById("btn-blog-index")
  .addEventListener("click", function () {
    window.location.href = "./blog.html";
  });

// Go to index
document.getElementById("btn-blog-blog").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// function validate(input) {
//   if (isNaN(input) || input < 0 || typeof input !== "number") {
//     alert("You must enter a non-negative number in each field.");
//     return false;
//   }
// }

function getInputElementId(elementID) {
  const inputIdField = document.getElementById(elementID);
  const inputIdFieldString = inputIdField.value;
  const inputFieldValue = parseInt(inputIdFieldString);

  inputIdField.value = "";

  return inputFieldValue;
}

// declare id as global variable
let id = 0;

function updateArea(id, element, area) {
  const tableBody = document.getElementById("table-body");
  //   const row = tableBody.createElement("tr");
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
    <tr class="">
        <td class="row-title">${id}.<span>&nbsp;</span>${element} </td>
        <td class="table-area">${area}<span>cm</span><sup>2</sup></td>
        <td><button class="">Convert to &nbsp;<span>m</span><sup>2</sup></button></td>                    
    </tr>
    `
  );
}

function validate(input1, input2) {
  if (
    isNaN(input1) ||
    isNaN(input2) ||
    input1 < 0 ||
    input2 < 0 ||
    typeof input1 !== "number" ||
    typeof input2 !== "number"
  ) {
    // alert("You must enter a non-negative number in each field.");
    return 0;
  }
}

function randomColor(event) {
  event.style.background = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

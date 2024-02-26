const spreadSheetContainer = document.querySelector("#spreadsheet-container");

const ROWS = 10;
const COLS = 10;

const spreadSheet = [];

class Cell {
  constructor(isHeader, disabled, data, row, column, active = false) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.active = active;
  }
}

initSpreadSheet();

function initSpreadSheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadSheetRow = [];
    for (let j = 0; j < COLS; j++) {
      const cell = new Cell(false, false, i + "-" + j, i, j, false);
      spreadSheetRow.push(i + "-" + j);
    }
    spreadSheet.push(spreadSheetRow);
  }
  drawSheet();
  console.log(spreadSheet);
}

function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.row + cell.column;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;
  return cellEl;
}

function drawSheet() {
  for (let i = 0; i < spreadSheet.length; i++) {
    for (let j = 0; j < spreadSheet[i].length; j++) {
      const cell = spreadSheet[i][j];
      spreadSheetContainer.append(createCellEl(cell));
    }
  }
}

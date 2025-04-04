export function initGrid() {
  const gridOptions = {
    autoSizeStrategy: {
      type: "fitCellContents",
    },
    rowData: [
      { Категория: "Работа", Сумма: "52 000", Дата: "12.04.2024" },
      { Категория: "Работа", Сумма: "52 000", Дата: "12.04.2024" },
      { Категория: "Работа", Сумма: "52 000", Дата: "12.04.2024" },
    ],

    columnDefs: [
      {
        width: 50,
        cellRenderer: function (params) {
          return `<input type="radio" name="rowSelect" value="${params.value}" />`;
        },
      },
      { field: "Категория" },
      { field: "Сумма" },
      { field: "Дата" },
    ],
  };

  const firstGrid = document.querySelector("#grid1");
  const secondGrid = document.querySelector("#grid2");

  agGrid.createGrid(firstGrid, gridOptions);
  agGrid.createGrid(secondGrid, gridOptions);
}

import { initGrid } from "./aggrid.js";
import { initChart } from "./echarts.js";

const showTablesBtn = document.getElementById("show-tables");
const showChartsBtn = document.getElementById("show-charts");

const tablesContainer = document.querySelector(".tables-container");
const chartsContainer = document.querySelector(".charts-container");

const modalMenu = document.getElementById("modalMenu");
const openModalBtns = document.querySelectorAll(".open-modal-add");
const deleteBtn = document.querySelectorAll(".delete-btn");

document.addEventListener("DOMContentLoaded", () => {
  initGrid();
});

let chartInitialized = false;

showChartsBtn.addEventListener("click", () => {
  tablesContainer.style.display = "none";
  chartsContainer.style.display = "flex";

  if (!chartInitialized) {
    initChart();
    chartInitialized = true;
  }
});

showTablesBtn.addEventListener("click", () => {
  tablesContainer.style.display = "flex";
  chartsContainer.style.display = "none";
});

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalMenu.style.display = "flex";
  });
});

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("delete");
  });
});

window.addEventListener("click", (event) => {
  if (event.target === modalMenu) {
    modalMenu.style.display = "none";
  }
});

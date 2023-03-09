//Daniel Varjaskéri  Szoft I-2 E 2023.03.09.
import { data } from "./data.js";

const table01 = document.getElementById('table01');

function renderTableData(table){
    data.forEach(bike => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent = bike.name;
        const tdWheel = document.createElement('td');
        tdWheel.textContent = bike.wheel;
        const tdUse = document.createElement('td');
        tdUse.textContent = bike.use;
        const tdPrice = document.createElement('td');
        tdPrice.textContent = bike.price;
        tr.appendChild(tdName);
        tr.appendChild(tdWheel);
        tr.appendChild(tdUse);
        tr.appendChild(tdPrice);

        table.appendChild(tr);
    });
}

renderTableData(table01);